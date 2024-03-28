#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000; // Dollar $
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Welcome to your ATM account!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select the operation",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please Enter your amount "
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance!!");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is ${myBalance}`);
        }
    }
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "your fastcash amount is",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!");
}
