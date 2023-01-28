// Part 1
console.log('Part a) if, if-else, and else statement')
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

// Part 2
console.log('Part b) switch statement')
userInput2 = prompt("Pick a color (type a, b, or c) a) Red b) Blue c) Green").toLowerCase();
switch(userInput2) {
    case "a":
        console.log('The pick color is red');
        break;
    case "b":
        console.log('The pick color is blue');
        break;
    case "c":
        console.log('The pick color is green');
        break;
    default:
        console.log('Color is not on the list');
        break;
}