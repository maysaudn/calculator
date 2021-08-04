// BASIC FUNCTIONS 

function add(x, y) {
	return x + y;
};

function subtract(x, y) {
	return x - y;
};

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function remainder(x, y) {
    return x % y;
}

function operate(operator, x, y) {
    if (operator === '+') {
        return add(x, y);
    } else if (operator === '-') {
        return subtract(x, y); 
    } else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    } else if (operator === '%') {
        return remainder(x, y);
    }
}

// Create the functions that populate the display when you click the number buttons
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

const clearButton = document.getElementById('ac');
const screen = document.getElementById('screen');
const numberButtons = document.querySelectorAll('.numbers');

for (i = 0; i < numberButtons.length; i++) {
    // add an event listener on each button that runs a function that records their value and displays it on the screen
    numberButtons[i].addEventListener('click', displayValue);
}

function displayValue(e) {
    let value = e.target.innerText;
    screen.innerText += value;
    screen.classList.add('screenText');
    return value;
}

clearButton.addEventListener('click', clearScreen);

function clearScreen(e) {
    //Find the screen and delete the innerText
    screen.innerText = '';
}