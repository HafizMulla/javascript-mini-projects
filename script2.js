// This is a guessing game where the user will be asked to guess the randomly generated number
 
const prompt = require("prompt-sync")();

const target = Math.floor(Math.random() * 100);
console.log(target);
let guesses = 0;

while(true){
    guesses++;

    const guess = Number(prompt("Guess the number (0-100): "));
    console.log(guess);
    
    if (guess > target){
        console.log("Your guess is too high.");
    } else if (guess < target) {
        console.log("Your guess is too less.");
    } else {
        console.log("Your guessed it!");
        break;
    }
}

console.log("You guessed the number in", guesses, "tries!");