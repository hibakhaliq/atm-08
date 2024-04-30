import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pincode!");
    let oprationsAns = await inquirer.prompt([{
            name: "opration",
            message: "please select an option",
            type: "list",
            choices: ["withdraw money", "check balance"]
        }]);
    console.log(oprationsAns);
    if (oprationsAns.opration === "withdraw money") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pincode");
}
