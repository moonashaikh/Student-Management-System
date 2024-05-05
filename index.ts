#!/usr/bin/env/  node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber: number = Math.floor(10000 + Math.random() * 9000)

// const color : string = "RED"
console.log(chalk.blueBright.bold.italic("\n \n *****STUDENT MANAGEMENT SYSTEM MADE BY RASHIDA SHAIKH****** \n\n"))
let myBalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter Student Name :-",
            validate: function (value) {

                if (value.trim() !== "") {
                    return true

                }
                return "please enter a non-empty value"
            }


        },
        {
            name: "courses",
            type: "list",
            message: "Select Course to Enrolled :-",
            choices: ["Ms office", "HTML", "Typescript", "Python"]
        }

    ]);
//  define object , key is string with corresponding values
const tutionfee: { [key: string]: number } = {
    "Ms office": 2500,
    "HTML": 3000,
    "Typescript":4000,
    "Python": 8000
};
console.log(chalk.green.bold.italic(`\n Tution Fee : ${tutionfee[answer.courses]}/ -\n`));
console.log(chalk.green.bold.italic(`Balance: ${myBalance}\n`));

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            type: "list",
            message: "Select Payment Method :- ",
            choices: ["Bank Transfer", "Easypaisa", "jazz Cash"]
        },
        {
            name: "amount",
            type: "input",
            message: "Transfer Money :- ",
            validate: function (value) {

                if (value.trim() !== "") {
                    return true

                }
                return "please enter a non-empty value"

            }
        }
    ]);
console.log(chalk.red.bold.italic(`\n You Select Payment Method: ${paymentType.payment}`))


const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount) //  parseFloat is to convert string to floating point number

if (tutionfees === paymentAmount) {
    console.log(chalk.green.bold(`CONGRATUALATIONS , YOu have Succesfully Enrolled in ${answer.courses} \n`))
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What Would u Like to do Next:-",
            choices: ["View status", "Exit"]
        }
    ])
    if (ans.select === "View status") {
        console.log(chalk.magentaBright.bold.italic("\n\n *********** STSTUS **********\n \n"));
        console.log(chalk.yellow.bold(`Student Name:- ${answer.students}`));
        console.log(chalk.yellow.bold(`Student ID :- ${randomNumber}`));
        console.log(chalk.yellow.bold(`Course:-  ${answer.courses}`));
        console.log(chalk.yellow.bold(`Tution Fee Paid:- ${paymentAmount}`))
        console.log(chalk.yellow.bold(`Balancde :- ${myBalance += paymentAmount}`))
    } else
        console.log("\n *******Exiting Student Management System********")
}

else
    console.log(`invalid amount due to course \n`)



