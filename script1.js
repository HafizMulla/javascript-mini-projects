// This is a computer quize game where the user will answer the questions asked and will get the final score printed.

const prompt = require("prompt-sync")();

console.log("Welcome to the Computer Hardward Quiz!")


let correctAnswers = 0;
const totalQuestions = 3;


const answer1 = prompt("Whats is the brain of the Computer? ");

const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1){
    correctAnswers++;
    console.log("You got it correct!");
} else {
    console.log("You got it wrong...");
}

const answer2 = prompt("Whats is better a 3090ti or 4090? ");

const correctAnswer2 = "3090ti";

if (answer2.toLowerCase() === correctAnswer2){
    correctAnswers++;
    console.log("You got it correct!");
} else {
    console.log("You got it wrong...");
}

const answer3 = prompt("Whats is the recommend amount of RAM in 2024? ");

const correctAnswer3 = "16GB";

if (answer3.toLowerCase() === correctAnswer3){
    correctAnswers++;
    console.log("You got it correct!");
} else {
    console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers/totalQuestions)*100);

console.log("You got", correctAnswers, "questions correct!")
console.log("You score", percent.toString() + "%!");
