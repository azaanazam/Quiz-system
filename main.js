#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to my advanture quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
let points = 0;
//question 
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
////question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft",
        type: "list",
        choices: ["elon musk", "bill gates", "Mark", "Ali"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 3 
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of pakistan",
        type: "list",
        choices: ["karachi", "punjab", "islamabad", "kpk"]
    }
]);
if (question3.three == "islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current govornor of sindh",
        type: "list",
        choices: ["Ali", "Kamran Tassori", "Azan", "Azam"]
    }
]);
if (question4.four == "Kamran Tassori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "in whih language you are hearing my voice",
        type: "list",
        choices: ["english", "sindhi", "urdu", "french"]
    }
]);
if (question5.five == "urdu") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//output conditions
if (points >= 4) {
    console.log("congratulations!");
    console.log(`your points: ${points}`);
}
else {
    console.log("you loss! try next time");
    console.log(`your points: ${points}`);
}
