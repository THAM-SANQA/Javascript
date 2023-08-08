// decodeUri() and encodeUri()
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);


// // Practice exercise 8.1
// const code1 = "How's%20it%20going%3F";
// const code2 = "How's it going?";
// const decodedComp = decodeURIComponent(code1);
// console.log(decodedComp);
// const encodedComp = encodeURIComponent(code2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeURI(uri);
// console.log(encoded);

// //Practice exercise 8.2
// const arr = ["Laurence","TJ", "Mike","TJ", "Larry", "Kim","TJ", "Joanne", "Laurence", "Mike"];
// const arr2 = arr.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// });
// console.log(arr2);

//Practice exercise 8.3
// const myArr = [1, 4, 5, 6,12,28,56];
// const myArray = myArr.map((ele) => ele * 2);
// console.log(myArray);

// //Practice exercise 8.4
// const sentance = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     const tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(sentance));

// //Practice exercise 8.5
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// vowels.forEach((letter, index) => {
//     console.log(letter, " will be replaced with ", index);
//     val = val.replaceAll(letter, index);
// });
// console.log(val);

// //Practice exercise 8.6
// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 11)); // 0-10
// console.log(Math.floor(Math.random() * 10) + 1); // 1-10;
// console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//     console.log(ranNum(1, 100));
// }

// //Practice exercise 8.7
// let future = new Date(2027, 9, 10, 23, 2);
// console.log(future);
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month - 1]} ${day} ${year}`;
// console.log(myDate);

//   Projects
//Word scrambler
let str = "JavaScript";

function scramble(val) {
    let max = val.length;
    let temp = "";
    for (let i = 0; i < max; i++) {
        console.log(val.length);
        let index = Math.floor(Math.random() * val.length);
        temp += val[index];
        console.log(temp);
        val = val.substr(0, index) + val.substr(index + 1);
        console.log(val);
    }
    return temp;
}
console.log(scramble(str));

//Countdown timer
const endDate = "Sept 19 2023";
function countdown() {
    const total = Date.parse(endDate) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
        days,
        hours,
        mins,
        seconds
    };
}
function update() {
    const temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property} left: ${temp[property]}; `);
    }
    console.log(output);
    setTimeout(update, 1000);
}
update();




