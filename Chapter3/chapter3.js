// arrays
// arr1 = new Array("purple", "green", "yellow"); //wrong way to create arrays.
// arr2 = ["black", "orange", "pink"]; //correct way to do arrays
// console.log(arr1);
// console.log(arr2);

// let arr = ["hi there", 5, true]; // arrays can store multiple data types at once.
// console.log(typeof arr[0]); // arrays don't convert data types.
// console.log(typeof arr[1]); // we can get the definition of data types of indexes using "typeof"
// console.log(typeof arr[2]);

// const arr = ["hi there", "welcome"]; // you can declare an array using const
// arr[0] = "new value"; // but you con only change the index values of the array.
// console.log(arr);
// arr = ["nope, now you are overwriting the array"]; // you can't change the array itself.

// Accessing elements
// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]); // we use te indexes to access specific elements of an array
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]); // when the index has no value, JS returns undefined.
// console.log(cars[-1]);

// Length of arrays
// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length); // length is determined by the number of elements in the array
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);
// // we can also use ".length" to get the last element
// lastElement = colors[colors.length - 1]; // reveals the last index.
// console.log(lastElement);

// Practise Ex 3.1
// let list = ["Milk", "Bread", "Apples"];
// console.log("Length of list: ", list.length);
// list[1] = "Bananas";
// console.log(list);

//   Adding and replacing functions
//  elements can be added using the "push()" method
// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine"); // you can pus without naming it
// let lengthOfFavoriteFruits = favoriteFruits.push("lime"); // we can assign a variable to the push
// console.log(favoriteFruits); // adds elements to the end of an array
//  adding elements to a specific index using the "splice()" method
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// // arrOfShapes.splice(2, 0, "square", "trapezoid");
// // // the first character "2" shows the index of insertion and "0" is the number of elements we want to delete.
// // console.log(arrOfShapes);
// // splice can also delete characters from an array.
// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);
//  adding arrays can be done using "concat()" known as concatenation
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6); // the array in the brackets come in last
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9); // we can also add multiple values seperated by a comma.
// console.log(arr8);

//   Deleting elements
// "pop()" is used to delete the last element
// "shift()" is used to delete the first element
// "splice()" can be used to delete multiple elements, starting from the selected index
// arr8.splice(1, 3); // will delete 3 elements starting from index 1.
// delete arr8[0]; // changes the value of sn element to undefined
// console.log(arr8);

//   Finding elements
//  "find()" method is used to find the values of an array.
// it is a funtion executed on every element in the array
// returns undefined if the element is not there
// arr8 = [2, 6, 7, 8];
// let findValue = arr8.find(function (e) { return e === 6 });
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);
//  "indexOf()" metod is used to find the index of an element
// it returns -1 when the value is not found.
// arr8 = [2, 6, 7, 8];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);
// // if you want to find the next occurrence of a value, you can add a 2nd arguement
// arr8 = [ 2, 6, 7, 8, 6]; // we added 6 just for the example
// let findIndex3 = arr8.indexOf(6, 2); //starts searching from index 2
// console.log(findIndex3);
//   "lastIndexOf()" method can be used to get the last occuttrnce of a certain value
// let animals = ["dog", "horse", "cat", "platypus", "dog", "pig", "dog", "cow"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog);

//   Sorting
// "sort()" used to sort numbers in ascending order and string in A-Z
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names.sort());
// let ages = [18, 72, 33, 56, 40];
// console.log(ages.sort());

//   Reversing
// "reverse()" method reverses the array. 1st element to last and vice versa
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names.reverse());

// // Practice Ex 3.2
// const list = [];
// list.push("Milk", "Bread", "Apples");
// list.splice(1,1, "Bananas", "Eggs");
// console.log(list.pop());
// console.log(list.sort());
// console.log(list.indexOf("Milk"));
// list.splice(1,0, "Carrots", "Lettuce");
// let newList = ["Juice", "Pop"];
// combined = list.concat(newList, newList);
// console.log(combined.lastIndexOf("Pop"));
// console.log(combined);

//   Multidimensional arrays
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let value1 = arrOfArrays2[0][1];
// console.log(value1);
// console.log(arrOfArrays2[2][2]); //last value

// // Practise Ex 3.3
// let array = [1,2,3];
// let newArray = [array,array, array];
// console.log(newArray[2][1]);

//   Objects
// arrays are types of objects
// objects allow us to group multiple varialbles under one.
// "{}" curly brackets are used in objects
// let dog = {
//     dogName: "Spoonky",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// };
// console.log(dog["color"]); // we can access the properties using the name not the index.
// console.log(dog.color); // the preoperty can be accessed by adding the property to the object using a dot.
// //  Updating Objects
// dog["color"] = "black";
// dog.weight = 2.3;
// dog["age"] = "three";
// console.log(dog);

// // Practice Ex 3.4
// let myCar = {
//     make: "Subaru",
//     model: "Impreza",
//     colour: "Blue",
//     new: true, 
//     doors: 5,
//     value: 300000,
// }
// let color = "colour"; // asign a variable to a string that already eists.
// myCar[color] = 'Pink'; // prevents you from just retyping the object property.
// color = "new";
// myCar[color] = false;
// console.log("The car I want is a " + myCar.make + " " + myCar.model);
// console.log("The car is new: " + myCar.new);

//  Objects in objects
// sometimes the object will have a property that has subdirectories.
// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street", // the address has multiple values under it and we had to create it as an object
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };
// // we can do this to access properties of the address
// company.address.zipcode = "33117";
// company["address"]["number"] = "100";
// console.log(company.address);
//  Arrays in objects
// like when choosing to present one of multiple activities we use an array in an object
// company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };
// console.log(company.activities[2]); // we use dot notation to access the array then square brackets to access the index of the array.
//  Objects in arrays
// when a property has two or more properties definig it
// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];
// // "[]" array and "{}" object
// console.log(addresses[0].street); // accessing the first street name is search through index then property name.

// Practise Ex 3.5
let people = {friends:[]};
let a = {
    name: "Tom",
    surname: "Banks",
    id: 23785
};
let b = {
    name: "Kat",
    surname: "Ndaba",
    id: 12305
};
let c = {
    name: "Tim",
    surname: "Mount",
    id: 21905
};
people.friends.push(a,b,c);
console.log(people);
