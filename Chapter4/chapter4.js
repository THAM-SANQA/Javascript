//   if & if-else statements
// let rain = true;
// if (rain) { // runs wen expression is true
//     console.log("** Taking my umbrella when I need to go outside **");
// } else { // runs when expression is false
//     console.log("** I can leave my umbrella at home **");
// } // else block is optional
// if the else block is left out and the boolean if value is false, the function is skipped and the rest of the code is run
// let hobby = "dancing";
// if (hobby == "coding") { // don't forget the assignment operators
//     console.log("** I love coding too! **");
// } else {
//     console.log("** Can you teach me that? **");
// }

// // Practice Ex 4.1
// let happy = true;
// console.log(happy);
// if (happy) {
//     console.log("What a wonderful day to be you, have a lovely one!");
// } if (!happy) {
//     console.log("Why? Hope it's nothing to hefty, you got this. You deserve the best.");
// }

//   else-if statements
// when a value has multiple categories to fall into, we use else-if.
// this is to satisfy the conditions of a category and move on to the next one and so on.
// let age = Number(prompt("enter an age: ")); //various prices for diferent ages
// let cost = 0; // cost of a ticket
// let message;
// if (age < 3) { 
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);
// since the code is run top to bottom, we also write our code like this:
// if (age < 3) {
//     console.log("Access is free under three.");
// } else if (age < 12) {
//     console.log("With the child discount, the fee is 5 dollars");
// } else if (age < 65) {
//     console.log("A regular ticket costs 10 dollars.");
// } else if (age >= 65) {
//     console.log("A ticket is 7 dollars.");
// }

// // Practice Ex 4.2
// let age = Number(prompt("What is your age?"));
// let message;
// if (age >= 21) {
//     message = "Entrance and purchase of alcohol ALLOWED!";
// }else if (age >= 19) {
//     message = "Entrance permitted but alcohol peurchase is NOT ALLOWED!";
// } else {
//     message = "XXX Entry Not Allowed!!! XXX";
// }
// alert(message);

//   Conditional ternary operators
// contains 3 operands.
// 1st operand is evaluated and if it returns true, operand 2 is executed.
// if the 1st operand returns false, operand 3 is executed.
// expression ? statement for true : statement associated with false;
// let age = prompt("enter age");
// age < 18 ? console.log("denied") : console.log("allowed");

// // Practice Ex 4.3
// const ID = !true; // we use const cause ID doesn't change
// let message = ID ? console.log("Allowed") : console.log("Denied");

//   Switch statements
// used whn evaluating more than 4 variables. they work like if-else.
// strict checking o variables, uses both data type and value("===").
// meaning expressions used in the case must be identical to their reference.
// let activity = "lunch";
// switch (activity) {
//     case "Get up": // expresions used to check which code to execute
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break; // to exit the code otherwise it'll run all cases
//     case "Dinner":
//         console.log("It is 6:30PM"); //code run when case is matched
//         break;
//     default: // executed when no case is matched
//         console.log("I cannot determine the current time.");
//         break;
// }

// // Practice Ex 4.4
// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 9 then subtract 3 
// randomNumber = (randomNumber * 10) - 3;
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);
// let input = String(prompt("Please enter a question: "));
// let answer;
// switch (RandomNumber) {
//     case 0:
//         answer = "Opps, No response. Try again.";
//         break;
//     case 1:
//         answer = "Lucky day, your answer will be delivered through someone special.";
//         break;
//     case 2:
//         answer = "All problems come with good, never lose hope";
//         break;
//     case 3:
//         answer = "People always need answers, can't you help others once in a while?";
//         break;
//     case 4:
//         answer = "Pain is a sign of development";
//         break;
//     case 5:
//         answer = "Everything will go well, don't stress about it.";
//         break;
//     default:
//         answer = "The universe forgot about you."
//         break;
// }
// console.log("Your question is '" + input + "' and my response is '" + answer+"'");

//   Combining cases
// when we have multiple expressions that run the same code, we combine them like below.
// switch (grade) {
//     case "F":
//     case "D":
//         console.log("You've failed!");
//         break;
//     case "C":
//     case "B":
//         console.log("You've passed!");
//         break;
//     case "A":
//         console.log("Nice!");
//         break;
//     default:
//         console.log("I don't know this grade.");
// }

// // Practice Ex 4.5
// let prize = Number(prompt("Enter a value between 1 and 10: "));
// let message = "Your selection: ";
// let win = " .You won: '";
// switch (prize) {
//     case 8:
//     case 9:
//         win += "Lifetime data.'";
//         break;
//     case 2:
//     case 3:
//         win += "Groceries for a year.'";
//         break;
//     case 4:
//         win += "Early access to heaven.'";
//         break;
//     case 5:
//     case 6:
//         win += "Lifetime emrates miles.'";
//         break;
//     case 7:
//         win += "Free medical aid for 50 years.'";
//         break;
//     default:
//         win += "Nothing, winners know when to stop.'";
//         break;
// }
// console.log(message + prize + win);



