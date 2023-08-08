// Manipulating an array.
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];
//theList.splice(0, 1, 'FIRST'); // first method.
theList.pop();
theList.unshift('FIRST');
theList.splice(2, 7, 'MIDDLE', 'hello world', 'LAST');
console.log(theList);

// Company product dialogue
// let inventory = [];
// let a = { name: "Samsung", model: "S23-Ultra", cost: "R"+30000, quantity: 25 };
// let b = { name: "iPhone", model: "14 Pro", cost: "R"+23000, quantity: 17 };
// let c = { name: "Nokia", model: "8", cost: "R"+10000, quantity: 6 };
// let d = { name: "mi", model: "F4 GT", cost: "R"+15000, quantity: 19 };
// inventory.push(a, b, c, d);
// console.log(inventory);
// console.log(inventory[2].quantity);