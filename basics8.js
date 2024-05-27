//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties,Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class) and 
//the class whose properties are inherited is known as superclass
const Person = require("./basics7")
class Pet extends Person

{

    

  //  location() {
       
   //
       // console.log("BlueCross");
 //   }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName)
    }

}
let pet =new Pet("sam","san")
pet.fullName()
//console.log(pet.locationTest())


