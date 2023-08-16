// // Projects
// // Recursive function
// function count(number) {
//     console.log(number);
//     if (number < 10) {
//         return count(number + 1);
//     }
//     return;
// }
// count(2);

// Timeout Order
let one = (() => { console.log("One") });
let two = (() => { console.log("Two") });
let three = () => {
    console.log("Three");
    one();
    two();
};
let four = () => {
    console.log("Four");
    setTimeout(one, 0);
    three();
}
four();