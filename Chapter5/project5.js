// Project 5
// Multiplication Table
const math = [];
let multiply = Number(prompt("Please enter a number for the multiplication table: "));
for (let x = 0; x < multiply + 1; x++) {
    const temp = [];
    for (let y = 0; y < multiply + 1; y++) {
        temp.push(x * y);
    }
    math.push(temp);
}
console.table(math);