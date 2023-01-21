// Part 1
function checkName() {
    let name = prompt('Please enter a name: ');

    while (name === null || name === "" || !isNaN(name)) {
        if (name === null || name === "") {
            name = prompt('You forgot to enter a name. Enter a name again: ');
        }
        else if (!isNaN(name)) {
            name = prompt(`${name} is invalid! Enter a name again: `);
        }
    }

    console.log('--- checkName() function ---');
    console.log("Welcome " + name.toUpperCase() + " to the class!");
}

// Part 2
function checkNum() {
    let userInput = prompt('Enter a number: ');
    let checkNumber = parseInt(userInput);

    while (userInput === null || userInput === "" || isNaN(checkNumber)) {
        if (userInput === null || userInput === "") {
            userInput = parseInt(prompt('You forgot to enter a number. Enter a number again: '));
            checkNumber = parseInt(userInput);
        }
        else if (isNaN(checkNumber)) {
            userInput = parseInt(prompt(`${userInput} is invalid! Enter a number again: `));
            checkNumber = parseInt(userInput);
        }
    }

console.log('--- checkNum() function ---');

if (checkNumber %2 === 0) {
    return true
}
else {
    return false
}
}


// Part 3
function lottery(numOfGames) {
    for (let i = 0; i < numOfGames; i++) {
        let numbers = [];
        for (let j = 0; j < 5; j++) {
            let randomNum = Math.floor(Math.random() * 100);
            numbers.push(randomNum);
        }
        console.log(`(${i + 1}) [${numbers}]`);
    }
}