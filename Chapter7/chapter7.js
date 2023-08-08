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


//   Projects
// Employee tracking app
class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Loveness", "Sunshine", 12);
const person2 = new Employee("Jade", "Abrams", 3);
const person3 = new Employee("Marcus", "Martial", 23);
const workers = [person1, person2, person3];
Employee.prototype.details = function () {
    return this.first + " " + this.last + " has worked here " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});

//  Menu items price calculator
class Menu {
    #price1 = 14;
    #price2 = 52;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#price1) + (this.val2 * this.#price2);
    }
    get total() {
        return this.calTotal();
    }
}
const val1 = new Menu(21,40);
const val2 = new Menu(1,32);
const val3 = new Menu(0,8);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);








