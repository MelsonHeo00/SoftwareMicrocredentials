// if, else if, else statement
userInput = prompt("Enter a value (string or number): ");
let checkInput = parseInt(userInput);
checkInput = isNaN(checkInput);

if (checkInput) {
    console.log(`${userInput} is a string`);
}
else {
    if (userInput > 0) {
        console.log(`${userInput} is a positive number`);
    }
    else if (userInput < 0) {
        console.log(`${userInput} is a negative number`);
    }
    else {
        console.log(`${userInput} is zero`);
    }
}