// This file contain the code for the Calculater program

const prompt = require('prompt-sync')();

const getNumber= (numberString) => {
    while (true){
        const number = parseFloat(prompt("Enter number " + numberString + ": "));
        if (isNaN(number)){
            console.log("Invalid input");
        } else {
            return number;
        }
    }
    
}

const number1 = getNumber("One");
const number2 = getNumber("Two");

const operator = prompt("Enter Sign: ")    

let results;
let valid = true;
switch(operator){
    case "+":
        results = number1 + number2
        break;
    case "-":
        results = number1 - number2
        break;
    case "/":
        if (number2 == 0){
            valid = false;
            console.log("Zero division Error.")
            break;
        }
        results = number1 / number2
        break;
    case "*":
        results = number1 * number2
        break;
    default:
        console.log("Please enter a valid sign")
        valid = false
    }
    if (valid) console.log(number1, operator, number2, "=", results);


