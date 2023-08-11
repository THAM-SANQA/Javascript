//  Classes
// blueprints for object creation
// allows for creation o multiple objects at once.
// class Dog { // class names start with a capital letter
//     constructor(dogName, weight, color, breed) { // initialises objects to the class which are set when initiating the class
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// // before initialising a class we first declare a variable to store it's values
// let dog = new Dog("JavaScript", 2.2, "brown", "chihuahua"); // values are entered as if it's a function
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// // Practice exercise 7.1
// class Person {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName=lastName;
//     }
// }
// let friend = new Person("Prince", "Bahloks");
// let friend2 = new Person("TJ", "Ndaba");
// console.log("Hi ", friend.firstName, friend.lastName, " and ", friend2.firstName,friend2.lastName);

// // Practice Ex 7.2
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let friend = new Person("Prince", "Bahloks");
// let friend2 = new Person("TJ", "Ndaba");
// console.log("we have", friend.fullname(), "and", friend2.fullname());

//  Properties
// getting properties that can't bd accessed from outside the class"#"
//  Getters and setters
//
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let friend = new Person("Prince", "Bahloks");
// console.log(friend.firstname);

// // Practice exercise 7.3
// class Animal {
//     constructor(animal, sounds) {
//         this.animal = animal;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.animal + " " + this.sounds);
//     }
// }
// Animal.prototype.sleep = function () {
//     return this.animal + " is sleeping";
// }
// let lion = new Animal("lion", "roars");
// let cow = new Animal("cow", "moos");
// lion.speak();
// console.log(cow.sleep());
// console.log(cow);










