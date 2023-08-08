// let nr1 = 12; //used for variables that can have new values reassigned to them in the code.
// var nr2 = 8; //used for variables that can have new values reassigned to them in the code.
// const PI = 3.14159; //used for variables assigned a value only ONCE! like "Pi"

// // "var" has a global scope. can be used anywhwere in the code.
// // "let" has a block scope. used within a block of code. "{}" curly brackets.
// // "const" cannot be reaasigned a value once it's assigned.

// // "strings" are assigned in quotes eithe single, double or backticks.
// let singleString = 'Hi there!';
// let doubleString = "How are you?";
// // example of a string.
// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// // "Escape characters" used to tell js to ignore special characters and use them as normal characters.
// // also known as a backslash.
// let str = "Hello, what's your name? Is it \"Mike\"?"; //here we are ignoring the double quotes
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?'; //here we are ignoring the single quote
// console.log(str2);

// let str3 = "New \nline."; // here we are creating a new line with the backslash
// let str4 = "I'm containing a backslash: \\!"; //here we are using a backslash as a normal character.
// console.log(str3);
// console.log(str4);

// // variarbles for numerical values. We tend to name the variable according to the data type it will contain
// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5
// console.log(octNr, " ", hexNr, binNr);
// // BigInt are nig numbers recognised with the postfix "n" 
// let bigNr = 90071992547409920n; //big integer endeing with the value n.
// let result = bigNr + intNr;
// console.log(result); //cannot mix BigInt with other number data types.

// // Practice Ex 2.1
// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// console.log(str1, typeof str1);
// console.log(str2, typeof str2);
// console.log(val1, typeof val1);
// console.log(val2, typeof val2);
// console.log(myNum, typeof myNum);

//Operators
// //Practice Ex 2.2 Addition
// let name = "TJ";
// let age = 22;
// let js = true;
// let message = "Hi, my name is " + name + " I am " + age + " years old and I can code JavaScript: " + js + ".";
// console.log(message);

// "%" modulus operator, checks how many times a value can be divided by another values and shows the remainder value
// "**" exponetial(double multiplication) used to raise values to a certain exponent or find the root of a value.
// Unary operators: increment(++) and decrement(--)
// these increase or decrease a value by 1.
// Prefix - before the variable. Logs in the incremented or decremented value from the beginning.
// Postfix - after the variable. Logs in the incremented or decremented value ater first logging in the original value.

// //Practice Ex 2.3 Exponents
// let a = Number(prompt("Enter a value for 1st side: "));
// let b = Number(prompt("Enter a value for 2nd side: "));
// let c = (a**2 + b**2)**0.5;
// console.log("The hypotenuse is", c);

// Assignment operartors, we can add an "=" at the end of our basic operators to shorten the code.
// x+=5 is the same as x = x + 5.

// // Practice Ex 2.4
// let a = 2;
// let b = 3;
// let c = 4;
// b += a;
// a /= c;
// c %= b;
// console.log(a, b, c);

// Comparison operators
// Equal operators: "=="(double equals operator) and "==="(tripple equals operator)
// "==" compares equal values irrespective of data type. The value must be the same to return true.
// "===" compares both value and data type, both criteria must be satisfied to return true.
// Not equal operator: "!=". returns true when 2 values are not equal.
// Greater than and smaller than operators: ">" and "<".

// Logical operators
//use to check 2 conditions in one, you can use AND, OR and NOT.
// And operator: "&&". returns two only if both expressions are true.
// Or operator: "||". returns true if one of the expressions is true. used in exclusive events that lead to the same outcome.
// Not operator: "!". in cases where the value of a boolean needs to be changed, the not operator will result in the opposite value.

