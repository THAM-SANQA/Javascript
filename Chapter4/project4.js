//// evaluating a number game
// let number = Number(prompt("Enter a number between 1 - 100: "));
// let randomNumber = Math.floor(Math.random()*100);
// if (number > randomNumber) {
//     console.log("Your number, "+number+", is greater than "+randomNumber);
// } else if (number === randomNumber) {
//     console.log("Your number, "+number+", is equal to "+randomNumber);
// } else {
//     console.log("Your number, "+number+", is less than "+randomNumber);  
// }

//// Friend checker game
// let name = String(prompt("Enter a name: "));
// let response;
// switch (name) {
//     case "TJ":
//     case "Kat":
//     case "Mtho":
//     case "Jade":
//     case "Prince":
//     case "Vince":
//     case "Deney":
//         response = name + " is a friend.";
//         break;
//     default:
//         response = name + " is not a friend.";
//         break;
// }
// console.log(response);

// Rock Paper Scissors game
let array = ["Rock", "Paper", "Scissors"];
let comp = Math.floor(Math.random() * 3);
let cpu = array[comp];
let person = Number(prompt("Enter number: '1' for Rock, '2' for Paper or '3' for Scissors."));
person -= 1;
let human = array[person];
if (comp === person) {
    console.log("You chose " + human + " computer chose " + cpu + ". Hence it's a TIE.");
} else if (person > comp) {
    if (person === 2 && comp === 0) {
        console.log("You chose " + human + " computer chose " + cpu + ". Hence You lost.");
    } else {
        console.log("You chose " + human + " computer chose " + cpu + ". Hence You won.");
    }
} else {
    if (person === 0 && comp === 2) {
        console.log("You chose " + human + " computer chose " + cpu + ". Hence You won.");
    } else {
        console.log("You chose " + human + " computer chose " + cpu + ". Hence You lost.");
    }
}


