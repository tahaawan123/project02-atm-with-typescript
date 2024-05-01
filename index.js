#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000; // Dollar $
let myPin = 4321;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.red("Enter your pin code")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.magenta("Welcome to your ATM account!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellowBright("select the operation"),
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.blue("Please Enter your amount ")
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient balance!!"));
        }
        else if (myBalance -= amountAns.amount) {
            console.log(chalk.green(`your remaining amount is ${myBalance}`));
        }
    }
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: chalk.magentaBright("your fastcash amount is"),
                choices: ["1000", "2000", "5000", "10000", "20000"]
            }
        ]);
        if (fastCashAns.fastcash > myBalance) {
            console.log(chalk.red("Insufficient balance!!"));
        }
        else if (myBalance -= fastCashAns.fastcash) {
            console.log(chalk.greenBright(`your remaining amount is ${myBalance}`));
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.bgBlueBright(`your current balance is ${myBalance}`));
    }
}
else {
    console.log("Incorrect pin code!!");
}
