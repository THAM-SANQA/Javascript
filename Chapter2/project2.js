// Miles to Kilometers converter
// let mile = Number(prompt("Enter a value for miles: "));
// let km = 1.60934 * mile;
// let converted = "The distance of " + mile + " miles is equal to " + km + " kms.";
// console.log(converted);

// // Kilometers to Miles converter
// let kms = Number(prompt("Enter a value for kilometers: "));
// let miles = kms / 1.60934;
// let convert = "The distance of " + kms + " kms is equal to " + miles + " miles.";
// console.log(convert);


// BMI calculator
let heightIn = Number(prompt("Enter your height in inches: "));
let weightPound = Number(prompt("Enter your weight in pounds: "));
let height = (heightIn * 2.54)/100; // height in m
let weight = weightPound / 2.2046; // weight in kg
let bmi = weight/(height**2);
console.log("Your height is "+height+"m and your weight is "+weight+"kgs.")
console.log("Your BMI is " + bmi);