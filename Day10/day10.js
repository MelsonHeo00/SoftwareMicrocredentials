console.log('Melson Heo');

/*
console.log('The current counter is 1');
console.log('The current counter is 2');
console.log('The current counter is 3');
console.log('The current counter is 4');
console.log('The current counter is 5');
You can simplify this code with a loop
*/

// Example 1: Simplify the previous lines using the loop
for (let counter = 1; counter <= 5; counter++) {
    console.log(`The current counter is ${counter}`);
}

// Example 3: Print number 100 to 0, inclusive, decreasing order to step of 10
for (let y = 100; y >= 0; y -= 10) {
    console.log(`y = ${y}`);
}

// Example 2: Print number from 0 to 50, exclusive, only even numbers. The program will ask the user to enter the initial.
let num = parseInt(prompt("Enter a number between 0 to 40: "))

for (num; num < 50; num++) {
    if (num % 2 === 0) {
        console.log(`number = ${num}`);
    }
}

// Example 4: for loop in an array
let cars = ['Tesla', 'BMW', 'Mazda', 'Nissan', 'Jeep'];

for (let i = 0; i < cars.length; i++) {
    console.log(`car ${i + 1} = ${cars[i]}`);
}

// Example 5: for ... of loop to print each element in an array
for (let eachItem of cars) {
    console.log(eachItem);
}

// Example 6: for ... of loop to print each letter in a string
let myString = "Prof. Wu";
for (let eachLetter of myString) {
    console.log(eachLetter);
}

// Example 8: Nesting for loops
let outerCounter = 1;

for (let outerCounter = 1; outerCounter <= 5; outerCounter++) {
    console.log(`------ OUTER LOOP COUNT ${outerCounter} ------`)
    for (let innerCounter = 30; innerCounter >= 0; innerCounter -= 10) {
        console.log(`Inner counter = ${innerCounter}`)
    }
}

// Example 9: While loop
let z = 0;
while (z < 5) {
    console.log(`The current z = ${z}`);
    z++;
}

// Example 10
const SECRET = 8;
let guessNum = parseInt(prompt("Guess a number between 0 and 10"));
while (guessNum !== SECRET) {
    guessNum = parseInt(prompt("WRONG! Guess another number between 0 and 10"));
}
console.log(`GREAT JOB! Number ${guessNum} is the secret number`);

// Example 11: Working with Break in a loop. Loop will be terminated at 9.
console.log('Example 11')
for (let t = 20; t >= 0; t--) {
    console.log(`t = ${t}`);
    if (t === 9) {
        break;
    }
}

// Example 12: Working with continuing in a loop. Loop will skip one iteration when t = 9.
console.log('Example 12')
for (let t = 20; t >= 0; t--) {
    if (t === 9) {
        continue;
    }
    console.log(`t = ${t}`);
}

// Example 13
const NUMBERS = [8, 2];
let num1, num2;

/*
let guessNumbers = parseInt(prompt("Guess a number between 0 and 10"));
while (guessNum !== NUMBERS[0] || guessNum !== NUMBERS[1]) {
    guessNumbers = parseInt(prompt("WRONG! Guess another number between 0 and 10"));
}
console.log(`GREAT JOB! Number ${guessNumbers} is the secret number`);
*/