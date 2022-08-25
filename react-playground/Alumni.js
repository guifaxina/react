const Person = require("./Person")

class Alumni extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  }

module.exports = Alumni