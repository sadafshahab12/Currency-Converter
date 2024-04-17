
import inquirer from "inquirer";

const currency: any = {
  USD: 1,  //based currency
  EUR: 0.91,
  INR: 71.57,
  PKR: 278,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD", "EUR", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter Your Amount",
  },
]);

let from_amount = currency[user_answer.from];
let to_amount = currency[user_answer.to];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(converted_amount);

