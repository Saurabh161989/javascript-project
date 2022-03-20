//if else

let num1 = 6;
let num2 = 4;
let num3 = 7;

if(num1 > num2)
    console.log("num1 is greater");
else
    console.log("num2 is greater");

//if you do not use the {} braces, it will allow only one statement in if else condition

if(num1 > num2)
    console.log("execute if statement");
else
    console.log("execute else statement");
    console.log("Since {} is not used in else statement, this statement is not part of else condition");

//Output: 
//execute if statement
//Since {} is not used in else statement, this statement is not part of else condition

//-------------------------------
num1 = 10
num2 = 15
num3 = 30

if(num1 > num2 && num1 > num3)
    console.log("num1 is greatest");
else if(num2 > num1 && num2 > num3)
    console.log("num2 is greatest")
else
    console.log("num3 is greatest");

//----------------------------------

let number = 6;

if(number % 2 === 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}