'use strict';
const firstNumber = prompt('Welcome to the Calculator, enter a number you want to use');
const operator = prompt('Choose either +, -, /, or *');
const secondNumber = prompt("Enter a second number you want to use");

function add() {
    console.log(`${Number(firstNumber)} + ${Number(secondNumber)} = ${Number(firstNumber) +  Number(secondNumber)}`)
}
function subtract() {
    console.log(`${Number(firstNumber)} - ${Number(secondNumber)} = ${Number(firstNumber) -  Number(secondNumber)}`)
}
function divide() {
    console.log(`${Number(firstNumber)} / ${Number(secondNumber)} = ${Number(firstNumber) /  Number(secondNumber)}`)
}
function multiply() {
    console.log(`${Number(firstNumber)} * ${Number(secondNumber)} = ${Number(firstNumber) *  Number(secondNumber)}`)
}

function Calculator() {
    if (operator === "+") {
        add()
    } else if (operator === "-") {
        subtract()
    } else if (operator === "/") {
        divide()
    } else if (operator === "*") {
        multiply()
    } else {
        console.error('calculator ERROR')
    }
}
Calculator()