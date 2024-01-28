/*
 Create a class that has class/static properties and methods
 Show how to use/access them.
*/

class Greetings {
  static staticGreeting = "Hello, World! This is OOP";

  static greet() {
    return "This is a static method!";
  }
}
console.log(Greetings.staticGreeting);
console.log(Greetings.greet());

/*
Using ES6+ classes, prepare code that computes descriptive statistics.
Use the refreshment below to refresh your memory.
*/

class DescriptiveStatistics {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }

  get mean() {
    return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
  }

  get median() {
    const mid = Math.floor(this.data.length / 2);
    return this.data.length % 2 !== 0
      ? this.data[mid]
      : (this.data[mid - 1] + this.data[mid]) / 2;
  }
}
const stats = new DescriptiveStatistics([1, 2, 3, 4, 4, 5, 5, 5, 6]);
console.log("Mean:", stats.mean);
console.log("Median:", stats.median);
