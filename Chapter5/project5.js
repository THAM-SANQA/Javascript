// Project 5
// Multiplication Table
const math = [];
let multiply = 15;
for (let x = 0; x < multiply + 1; x++) {
    const temp = [];
    for (let y = 0; y < multiply + 1; y++) {
        temp.push(x * y);
    }
    math.push(temp);
}
console.table(math);