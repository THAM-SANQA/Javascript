// // function sayHello() { // when declaring the function
// //  let you = prompt("What's your name? ");
// //  console.log("Hello", you + "!");
// // };
// // sayHello(); // this is how we call the function
// let varContainingFunction = function () {
//     let varInFunction = "I'm in a coding student.";
//     console.log("Hi there!", varInFunction);
// };
// varContainingFunction(); // when the function is called, the code inside it gets executed.
// as you've noticed, all variables are named in "camelCase" same goes for functions

// // Practice Ex 6.1
// function addition(one, two) {
//     return one + two;
// };
// one = Number(prompt("Enter a number to add: "));
// two = Number(prompt("Enter a number to add: "));
// console.log(addition(one, two)); // first call of function
// console.log(addition(23, 32)); // 2nd call of function

// // Practice Ex 6.2
// const description = ["beautiful", "wonderful", "cute", "common"];
// function name() {
//     let userName = prompt("Enter your name: ");
//     console.log(userName + " is a " + description[Math.floor(Math.random() * 4)] + " name.");
// };
// name();

// // Practice Ex 6.3
// let operator = "-";
// function addSub(one, two, operator) {
//     if (operator == "-") {
//         return one - two;
//     } else {
//         return one + two;
//     }
// };
// one = 12;
// two = 15;
// console.log(addSub(one,two,operator));

//   Arrow functions
// they look like:
// (param1, param2) => body of the function; // multiple parameter arrow function
// () => body of the function; // no parameter function
// param => body of the function; // single parameter arrow function
// // multiple line arrow function
// (param1, param2) => {
//     // line 1;
//     // any number of lines;
// };
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

//   Spread Operator("...")
// used before an expression or string and spreads out the elements of an array
// let spread = ["so", "much", "fun"];
// let tj = ['hope', 'it', 'works'];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful", ...tj];
// console.log(message); // individualises array values.

//   Rest parameter("...")
// converts multiple parameters into a single array as a parameter.
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?", "True?");


// // Practice Ex 6.4
// const values = [];
// let operator = "-";
// for (let i = 0; i < 10; i++) {
//     one = i * 5;
//     two = i * i;
//     const result = addSub(one, two, "+");
//     values.push(result);
// }
// function addSub(one, two, operator) {
//     if (operator == "-") {
//         return one - two;
//     } else {
//         return one + two;
//     }
// };
// console.log(values);

//  Local variables
// variables defined inside a function are not available outside the function
// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability(); // you can can call the funtion.
// console.log("Outside the function:", z);
// console.log("Not available here:", y); // you can't individually call the variable outside the function
// (() => { // IIFE, functiom with no name and in brackets
//     console.log("run right away"); // gets immediately executed
// })(); // empty brackets are used to invoke it.

// Practice Ex 6.5
// let number = "1000";
// (()=>{ number = "200";
//     console.log(number);
// })();
// let result = (()=>{
//     let number = "this is fun!";
//     return number;
// })();
// console.log(result, number);
// ((number)=>{
//     console.log(`What a go, ${number}`);
// })("it was worth it");

//  Recursive functions
// when you call a function inside itself
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3); // prints down from 3 to zero
// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }
// logRecursive(3);

// // Practice Ex 6.6
// function factorial(number) {
//     if (number === 0) {
//         return 1;
//     }else{
//         return number * factorial(--number);
//     }
// }
// console.log(factorial(4) + ` =  4!`);

//  Nested functions
// nested functions can access variables in outer functions 
// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(3); // always call your outer function

// // Practice Ex 6.7
// let start = 10;
// function count(start) {
//     console.log(start);
//     if (start < 1) {
//         return ;
//     }
//     return count(start-1);
// }
//     count(start);
//     function countIn(start) {
//         if (start > 0) {
//             start--;
//             return countIn(start);
//         }
//         return
//     }
// countIn(start);

// // Practice Ex 6.8
// let fuction = function (ok) {
//     console.log(ok);
// }
// fuction("What could it be??");
// function fuctionDuex(ok) {
//     console.log(ok);
// }
// fuctionDuex('I guess we did it.')

