class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor with the name parameter
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    getBreed() {
        return this.breed;
    }
}


// Create an instance of the Animal class
const genericAnimal = new Animal('Generic Animal');
genericAnimal.speak(); // Output: Generic Animal makes a noise.

// Create an instance of the Dog class
const myDog = new Dog('Rex', 'Labrador');
myDog.speak(); // Output: Rex barks.
console.log(`Breed: ${myDog.getBreed()}`); // Output: Breed: Labrador

// Check if myDog is an instance of Dog and Animal
console.log(myDog instanceof Dog); // Output: true
console.log(myDog instanceof Animal); // Output: true
