// Defining a class called Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Hello I am " + this.name);
    }

    // Method to greet
    greet() {
        console.log("Hello I am " + this.name);
        console.log("My Age is " + this.age);
    }
}

// Creating an object of the Person class
let person1 = new Person('Telal', 30);

// Calling the greet method
person1.greet();

