// function doSomething(callback) {
//     callback();
// }
// function sayHi() {
//     console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);

// splitName("Thami Ndaba", greet);
// function splitName(individual, callback) {
//     let array = individual.split(" ");
//     callback(array);
// }
// function greet(fullName) {
//     console.log(`Hello ${fullName[0]} ${fullName[1]}`);
// }

// function goals(plan) {
//     console.log(`These are my plans for the year: ${plan[0]} ${plan[1]} ${plan[2]}`);
// }
// function splitGoals(goal, printed) {
//     let arrayGoal = goal.split(" ");
//     printed(arrayGoal);
// }
// splitGoals("Graduate Master Progress", goals);

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = window.prompt("Please enter a value. ");
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });
// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },
//     // function (error) {
//     //     console.log("Error:", error);
//     // }
// ).catch(error => console.log("Error: ", error)); // Alternative to previous function

// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })

// function counter(val) {
//     console.log(val);
// }

// let promise = new Promise(function (resolve, reject) {
//  resolve("Start counting");   
// });
// promise.then(val=>{
//     counter(val);
//     return "One";
// })
// .then(val=>{
//     counter(val);
//     return "Two";
// })
// .then(val=>{
//     counter(val);
//     return "Three";
// })
// .then(val=>{
//     counter(val);
// }).catch(error => console.log("Error: ", error));

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        },
            2000);
    });
}
async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);
talk(8);