class Cat {
  constructor(breed, nikName) {
    this.breed = breed;
    this.nikName = nikName;
    this.miceCatch = 0;
    this.successChance = 0.4;
  }
  get nikName() {
    return this._nikName;
  }
  set nikName(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("name must be string");
    }
    if (newName.trim() === "") {
      throw new Error("Name must be not empty");
    }
    this._nikName = newName;
  }
  talk() {
    return "мяууу";
  }
  eat() {
    return "кушает";
  }
  catch() {
    if (this.successChance > Math.random()) {
      this.miceCatch++;
      return "удачная охота";
    }
    return "неудачная охота";
  }
}

class StrayCat extends Cat {
  constructor(nikName) {
    super("дворовой", nikName);
    this.miceEat = 0;
    this.successChance = 0.8;
  }
  eat() {
    if (this.miceCatch < this.miceEat) {
      return "надо идти на охоту";
    }
    this.miceEat++;
    this.miceCatch--;
    return "ест мышу";
  }
}

const tmp = new Cat("перс", "Вася");
const trp = new StrayCat("Пушок");
