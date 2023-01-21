// Part 1
console.log(`--- PART 1 ---`);
let userInput = prompt("Enter a number between 1 and 10:");
let num = parseInt(userInput);

while(isNaN(num) || (num > 10 || num < 1)) {
    if(isNaN(num)) {
        userInput = prompt(`${userInput} is not a number. Enter a number again.`);
        num = parseInt(userInput);
    }
    else if (userInput > 10) {
        userInput = prompt(`${userInput} is greater than 10. Enter a number less than 10`);
        num = parseInt(userInput);
    }
    else if (userInput < 1) {
        userInput = prompt(`${userInput} is less than 1. Enter a number greater than 1.`);
        num = parseInt(userInput);
    }
}

console.log(`You entered ${userInput}`);

// Part 2
console.log(`--- PART 2 ---`);
for(num; num <= 20; num+=1) {
    console.log(`Number is now ${num}`);
}