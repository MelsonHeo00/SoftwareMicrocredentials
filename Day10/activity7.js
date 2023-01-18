while(true) {
    let userInput = prompt("Enter a number between 1 and 10:");
    let num = parseInt(userInput);
    if (isNaN(num)) {
        console.log(`${userInput} is not a number. Enter a number again`);
    } else if (num > 10) {
        console.log(`${num} is greater than 10. Enter a number less than 10.`);
    } else if (num < 1) {
        console.log(`${num} is less than 1. Enter a number greater than 1.`);
    } else {
        console.log(`Your entered ${num}`);
        break;
    }
}