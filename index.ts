#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"
let balance = 10000; //Dollars
let pincode = 1234; // pincode


let answerPin = await inquirer.prompt([
  {
    name: "userpin",
    type: "number",
    message: "Kindly inter the pin code",
  },
]);
if (answerPin.userpin === pincode) {
  let q2 = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      choices: ["withdraw", "checkbalance" , "Quick Cash"],
    },
  ]);
  if (q2.operation === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdraw",
        type: "number",
        message: "How much do you want to withdraw",
      },
    ]);
    if (withdrawAns.withdraw > balance){
      console.log( chalk.bgRed("teeto partia na la mera nal"))
     }

    else if (balance -= withdrawAns.withdraw)
    {console.log(chalk.yellowBright("your remaining Balance is " + balance))}
    
  } 
  
  else if (q2.operation === "checkbalance"){
    console.log(chalk.bgCyan("your balance is " + balance));
} else if (q2.operation === "Quick Cash"){
  let quickans = await inquirer.prompt([
    {
      name: "quickcash",
      type: "list",
      choices: ["1000", "2000" , "5000" , "10000"]
    },
  ]);
   if (quickans.quickcash === "1000"){
    balance -= 1000;
    console.log(chalk.bgBlueBright("your remaining balance is " + balance));
} else if (quickans.quickcash === "2000") {
  balance -= 2000
  console.log (chalk.bgBlueBright("your remaining balance is " + balance))
} else if (quickans.quickcash === "5000") {
  balance -= 5000
  console.log (chalk.bgBlueBright("your remaining balance is " + balance))
} else if (quickans.quickcash === "10000") {
  balance -= 10000
  console.log (chalk.bgBlueBright("your remaining balance is " + balance))
} }
} else {
  console.log(chalk.red(" na munna na pin galt he  "));
}  
