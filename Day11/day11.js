console.log("Melson Heo");

// Example 1
function msg() {
    console.log("Hello world");
}

msg()
msg()
msg()

// Example 2
function printCount() {
    for (let i = 3; i > 0; i -= 1) {
        console.log(`Counting = ${i}`);
    }
}

// Example 3
function greetings(name) {
    console.log(`Welcome to the program ${name}`);
}

// Example 4
function upperMessage(message) {
    let upper = message.toUpperCase();
    console.log(upper);
}

/*
let user = prompt('Enter a message');
upperMessage(user);
*/

// Example 5
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0].toUpperCase()}`)
}

// Example 6
function printMsg(message, numCount) {
    for (let counter = 1; counter <= numCount; counter++) {
        console.log(`Counter = ${counter}, Message =  ${message}`)
    }
}

// Example 7
function isSnakeEyes(dice1, dice2) {
    if (dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!")
    }
    else { console.log("Oops! Not Snake Eyes!") }
}

// Example 8
function sumXY() {
    let x = 7, y = 3;
    return x + y;
    console.log('This line is after the return');
}

// Example 9
function doubleNumber(number) {
    let dNumber = number * 2;
    return dNumber
}

// Example 10
function sumNum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let a = -5, b = 8, c = 2;
let number1 = sumNum(b, c);
let number2 = sumNum(a, c);

// Example 11
function weather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    else {
        return false
    }
}

let userWeather = parseInt(prompt('Ask the user to enter a temperature'))
let userT = weather(userWeather)


// Example 12
function lastElement(arrayInput) {
    if (arrayInput === undefined) {
        return "You did not enter an eeay";
    }
    else if (arrayInput.length !== 0) {
        let lastIndex = arrayInput.length - 1;
        return arrayInput[lastIndex];
    }
    else {
        return "No array";
    }
}

let array1 = ['lion', 23, false, 'orange', 89];
let arrayAnswer = lastElement(array1);

// Example 13
let num = Math.PI;

// Example 14
function pickNum() {
    let pick = 10 + Math.round(Math.random() * 11);
    return pick;
}