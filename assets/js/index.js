class cat {
  constructor(breed, nikName) {
    this.breed = breed;
    this.nikName = nikName;
    this.miceCatch = 0;
    this.Chance = 0;
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
  successChance() {
    let num = Math.random();
    num = num.toFixed(1);
    this.Chance = num;
    if (this.Chance > 0.5) {
      return "большой шанс";
    } else {
      return "маленький шанс";
    }
  }

  catch() {
    let i = Math.random();
    i += this.Chance;
    if (this.Chance < 0.5) {
      return "нет смысла ,проверьте шанс ещё раз";
    } else if (i > 0.8) {
      this.miceCatch++;
      return "удачная охота";
    }
    return "неудачная охота";
  }
}

class strayCat extends cat {
  constructor(nikName) {
    super("дворовой", nikName);
    this.miceEat = 0;
  }
  niceEat() {
    if (this.miceCatch < this.miceEat) {
      return "надо идти на охоту";
    }
    this.miceEat++;
    return "ест мышу";
  }
  catch() {
    if (this.Chance < 0.5) {
      return "нет смысла ,проверьте шанс ещё раз";
    } else if (this.Chance > 0.6) {
      this.miceCatch++;
      return "удачная охота";
    }
    return "неудачная охота";
  }
}

const tmp = new cat("перс", "Вася");
const trp = new strayCat("Пушок");
