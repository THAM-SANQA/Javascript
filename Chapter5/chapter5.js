//   While loops
// executes block of code when expression returns true.
// let i = 0;
// while (i < 10) { //condition limiting the loop
//     console.log(i); // prints out values of 1
//     i++; // increments i by 1
// }
// // creating the fibinacci sequence
// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray);

// // Practice Ex 5.1
// let max = 29;
// let randomNumber = Math.floor((Math.random() * 29)) + 1;
// let correct = false;
// while (!correct) {
//     let guess = Number(prompt("Enter a number between 1 and 29: "));
//     if (guess === randomNumber) {
//         alert("you guessed correct! The answer was: " + randomNumber);
//         correct = true;
//         break;
//     } else if (guess > max) {
//         alert("Value outside to maximum range!");
//     } else if (guess > randomNumber) {
//         alert("Guess too high, Try again.");
//     } else {
//         alert("Guess too low, aim higher.");
//     }
// }

//   Do-while loops
// executes the code in the do block then loops through the while block until the expression returns false.
// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));
// code will continue looping until a value between 0-100 is entered

// // Practice Ex 5.2
// let i = 0;
// let step = 8;
// do {
//     console.log(i);
//     i += step;
// } while (!(i >= 100));

//   for loops
// we first initialize the variable before the first semi colon
// then we execute a condition which is run when it is true.
// then we perform the statement and return to step 2 until step 2 is false. 
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for loops can be used to create a sequence and add values to an array
// let arr = [];
// for (let i = 0; i < 100; i += 2) {
//     arr.push(i);
// }
// console.log(arr);

//// Practise Ex 5.3
//let myWork = [];
// let status = true;
// for (let i = 1; i <= 10; i++) {
//     switch (i) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 9:
//             myWork.push("name: 'Lesson " + i + "', status: " + status);
//             break;

//         default:
//             myWork.push("name: 'Lesson " + i + "', status: " + !status);
//             break;
//     }

// }
// console.log(myWork);
// const myWork = [];
// for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = { // don't forget objects
//         name: `Lesson ${x}`, status: stat
//     };
//     myWork.push(temp);
// }
// console.log(myWork);

//  Nested loops
// loop inside a loop, also createstabular data
// let arrOfArrays = [];
// for (let i = 0; i < 4; i++) {
//     arrOfArrays.push([]); //we are creating an empty array inside an array
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j); // we are pushing values to the array being created
//     }
// }
// console.log(arrOfArrays);
// console.table(arrOfArrays); // creates a table

// // Practice Ex 5.4
// let table = [];
// let row = 4;
// let colum = 8;
// let counter = 0; //value to be pasted inside our indice.
// for (let c = 0; c < row; c++) {
//     let temp = []; //create a new array to store the values of counter.
//     for (let r = 0; r <  colum; r++) {
//         counter++; // increase the counter
//         temp.push(counter); // place the reading values in the array
//     }
//     table.push(temp); // place the new arrry in the first array
// }
// console.table(table); // print it out as a table.

//   loops and arrays
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
// 'startsWith()' method just checks whether the string starts with a certain character
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i ++){ 
//  if(names[i].startsWith("J")){
//  delete names[i];
//  continue;
//  }
//  names[i] = "hello " + names[i]; 
// } 
// console.log(names);

// // Practice Ex 5.5
// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//     if (counter % 4 == 0) {
//         if (row != undefined) {
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
// }
// console.table(grid); 

//   for of loop
// used to iterate through values of an array
// cannot modify the array and can't get stuck in an infinite loop
// can write elements to a database or file or transfer them
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names) { // we create a temporay variable to hold the values of the index
//     console.log(name); // each index will iterate once
// }

// // Practise Ex 5.6
// let array = [];
// for (let i = 0; i < 10; i++) {
//     array.push(i+5);
// } 
// console.log(array);
// for (const arr of array) {
//     console.log(arr);
// }

//   for in loop
// iterates object values and can convert an object to an array.
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };
// for (let prop in car) { // created a temp variable to store the values of the object, also known as a key.
//     console.log(car[prop]); // converting the object to an array to get the key values of the object
// }

// // Practise Ex 5.7
// let thami = {
//     age: 25,
//     sex: "male",
//     tall: true,
// };
// for (const boy in thami) {
//     console.log(boy + " - " + thami[boy]);

// }
// let array = [25, "male", true];
// for (const key in array) {
//     console.log("Index: " +key + " - Value: " + array[key]);
// }

// // Practice exercise 5.8 
// let output = ""; 
// let skip = 4; 
// for (let i = 0; i < 10; i++) { 
//  if (i === skip) { 
//  continue; 
//  } 
//  output += i; 
// } 
// console.log(output);



