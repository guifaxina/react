class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greetings() {
      console.log(`Hello i'm ${this.name}`);
    }
 }

module.exports = Person