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

let sum1 = sum(7, 2);
console.log(`The sum of 7 and 2 is ${sum1}`);

let square = function (num) {
    return Math.pow(num, 2);
}

let square1 = square(7);
console.log(`The square of 7 is ${square1}`)

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

console.log(`Here is an example of a dice roll: `);
let dice1 = callTwice(rolldice);
console.log(`Here is a second example of a dice roll: `);
let dice2 = callTwice(rolldice);


// Example 8
function makeBetweenFunc(min, max) {
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

console.log('--- Example 8 ---')
console.log(`Our min is 10 and our max is 20`)
let test1 = makeBetweenFunc(10, 20);
console.log(`Let's say that we want to test out the number 15. The answer is: ${test1(15)}`)
console.log(`Let's say that we want to test out the number 5. The answer is: ${test1(5)}`)
console.log(`Let's say that we want to test out the number 30. The answer is: ${test1(30)}`)

// SKIP Example 9

// Example 10 - method
console.log('--- Example 10 ---')
const myMath = {
    area(side) { return side * side },
    perimeter(side) { return side * 4 }
}

let side1 = 5;
console.log(`If side = 5, then the area is ${myMath.area(side1)}`);
console.log(`If side = 5, then the perimeter is ${myMath.perimeter(side1)}`);
let side2 = 55;
console.log(`If side = 55, then the area is ${myMath.area(side2)}`);
console.log(`If side = 55, then the perimeter is ${myMath.perimeter(side2)}`);

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

console.log(`The name of the cat is ${cat.name}`)
console.log(`The color of the cat is ${cat.color}`)
console.log(`The breed of the cat is ${cat.breed}`)
console.log(`The cat will meow:`)
cat.meow()

// Example 12
console.log('--- Example 12 ---')
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() { this.eggCount++; return 'EGG' }
}

console.log(`The name of the hen is ${hen.name}`)
console.log(`The inital eggCount is ${hen.eggCount}`)
hen.layAnEgg();
hen.layAnEgg();
console.log(`After Helen lays two eggs, the egg count is ${hen.eggCount}`)
hen.layAnEgg();
hen.layAnEgg();
hen.layAnEgg();
hen.layAnEgg();
console.log(`After Helen lays four more eggs, the egg count is ${hen.eggCount}`)

// Example 13
console.log('--- Example 13 ---')
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log('Please pass a string next time!')
    }
}

function yellagain(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e)
        console.log('Please pass a string next time!')
    }
}

console.log(`The original string is: Please come back! `)
console.log(`yell() function`)
console.log(`This is how the code will output with a string: `)
console.log(yell("Please come back! "))
console.log(`This is how the code will output without a string: `)
console.log(yell(32))

console.log(`yellagain() function`)
console.log(`This is how the code will output with a string: `)
console.log(yellagain("Please come back! "))
console.log(`This is how the code will output without a string: `)
console.log(yellagain(32))