// Example 1
console.log('--- Example 1 ---')
let msg = 'This is an outside message';

function displayMsg() {
    let msg = 'Hello world';
    return msg;
}

// Example 2
console.log('--- Example 2 ---')
var fullMoon = true;
var species = "human";

if (fullMoon) {
    var species = "werewolf";
    console.log(`It is a full moon. Lupin is currently a ${species}.`);
}
console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// Example 3
console.log('--- Example 3 ---')
var message = "Hello World!";
console.log(message);
message = "Good Evening!";
console.log(message);

// Example 4 - Skip
// Example 5 
console.log('--- Example 5 ---')
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`The last value of i is ${i}`);

// Example 6
console.log('--- Example 6 ---')
let sum = function (num1, num2) {
    return num1 + num2;
}

sum(7, 2)

let square = function (num) {
    return Math.pow(num, 2);
}

square(7)

// Example 7
console.log('--- Example 7 ---')
function callTwice(dice) {
    dice();
    dice();
}

function rolldice() {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
}

// Example 8
function makeBetweenFunc(min, max) {
    console.log('--- Example 8 ---')
    return function (num) {
        if (num > min && num <= max) {
            return true;
        }
        else if (num < min || num > max) {
            return false;
        }
        else {
            return "CAN'T COMPARE";
        }
    }
}

// SKIP Example 9
// Example 10 - method
console.log('--- Example 10 ---')
const myMath = {
    area(side) { return side * side },
    perimeter(side) { return side * 4 }
}

// Example 11
console.log('--- Example 11 ---')
const cat = {
    name: 'Mickey',
    color: 'white with black spots!',
    breed: 'unknown',
    meow() {
        console.log(this.name)
    }
}

// Example 12
console.log('--- Example 12 ---')
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() { this.eggCount++; return 'EGG' }
}

// Example 13
function yell(msg) {
console.log('--- Example 13 ---')
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log('Please pass a string next time!')
    }
}

function yellagain(msg) {
console.log('--- Example 13 ---')
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e)
        console.log('Please pass a string next time!')
    }
}