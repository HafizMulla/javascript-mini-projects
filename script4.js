// This file contain the code for the bridge game

const prompt = require('prompt-sync')();

const answer = prompt("Would you like to play (y/n)");

if (answer.toLowerCase() === 'y'){
    const answer2 = prompt("Would you liek to go left or right (left or right)? ")

    if (answer2 === 'left'){
        console.log("Oops, you go left and fall of the bridge! You lost!")
    } else {
        // right
        console.log("Nice! you go right and approach the bridge..")
        const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)?");

        if (answer3 === 'cross') {
            console.log("You crossed the bridge and reach the end of the game");
        }else {
            console.log("You turn back and trip on a log and hurt your leg. You lose!");
        }
    }   

} else {
    console.log("Thats too bad!");
}