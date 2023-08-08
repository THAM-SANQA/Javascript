// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/gi));

// let text = "2t3H";
// //console.log(text.match(/[a-zA-Z]/));
// console.log(text.match(/[a-zA-Z0-9]/g));

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/)); // we use a dot in round brackets for special characters.
// console.log(text.match(/./g));

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g)); // '\d' is used to find any digit.

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g)); // '\s' find all white space characters.

// let nr = 357; //not a string
// console.log(nr.match(/3/g)); // 'match only works with a function.

// let text = "I love JavaScript! He dislikes spiders.";
// console.log(text.match(/(love|dislikes)\s(javascript|spiders)/gi));

// let text = "123123123a";
// //console.log(text.match(/(123)+/));
// console.log(text.match(/(123)*a/));

// let ex = "Hope you enjoy JavaScript";
// console.log(ex.match(/([a-e])\w+/g))

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));

// function test(a, b, c) {
//     a = "nice";
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");

//// 12.3
// console.log("last arguement is", returnLastArg(1, 200, 566, "yeah!!!"));
// function returnLastArg() {
//     let lastOne;
//     for (let el of arguments) {
//         console.log(el);
//         lastOne = el;
//     }
//     return lastOne;
// }

// 'use strict'
// x = 5;
// console.log(x);
// var x;

// try {
//     somethingVeryDangerous();
// } catch (e) {
//     if (e instanceof TypeError) {
//         // deal with TypeError exceptions
//         console.log("Type Error");
//     } else if (e instanceof RangeError) {
//         // deal with RangeError exceptions
//         console.log("Range Error");
//     } else if (e instanceof EvalError) {
//         // deal with EvalError exceptions
//         console.log("Eval Error");
//     } else {
//         //deal with all other exceptions
//         throw e; //rethrow
//     }
// }
// finally {
//     console.log("Error or no error, I will be logged!");
// }
// function somethingVeryDangerous() {
//     throw RangeError();
// }

// try {
//     test("57")
//     test("t")
// } catch (e) {
//         console.log(e);
//     }

// function test(val) {
//     if (isNaN(val)) {
//         throw console.log(`${val} is not a number Error.`);
//     } else {
//         console.log("Got a number.");
//     }
    
// }
