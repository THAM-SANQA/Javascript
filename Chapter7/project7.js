//   Projects
// Employee tracking app
class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Loveness", "Sunshine", 12);
const person2 = new Employee("Jade", "Abrams", 3);
const person3 = new Employee("Marcus", "Martial", 23);
const workers = [person1, person2, person3];
Employee.prototype.details = function () {
    return this.first + " " + this.last + " has worked here " +
        this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});

//  Menu items price calculator
class Menu {
    #price1 = 14;
    #price2 = 52;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#price1) + (this.val2 * this.#price2);
    }
    get total() {
        return this.calTotal();
    }
}
const val1 = new Menu(21, 40);
const val2 = new Menu(1, 32);
const val3 = new Menu(0, 8);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
