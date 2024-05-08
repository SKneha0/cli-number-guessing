#! /usr/bin/env node
import inquirer from "inquirer";
// //1) Computer will generata a rondom number - Done
// //2) user input for guessing number- Done
// //3) Computer user input with computer generated number and show result - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "plesa guess a number between 1-10",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulation!you guessed right number.");
}
else {
    console.log("you guessed worng number");
}
