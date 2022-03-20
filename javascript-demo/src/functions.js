/*why function? for code re-usability.. you can define a function once and call it as many number of times you want 

2 steps involved - defining a function and calling a function*/

function greet() //we are defining a function using function keyword
{
    console.log("Hello World!");
}

greet(); //calling a function

//---------------------------------
/* pass value to function and how function returns */

//return
function greet1()
{
    return "Hello again";
}

let str1 = greet1();
console.log(str1);

//a function can have multiple statement but cannot have multiple return statements. If you add multiple return statements, 
//it will execute the first return statement and exit and not execute further statements
function greet3()
{
    return "return statement 1";
    return "return statement 2"; //this is unreachable code
    console.log("sp"); //this is unreachable code
}

console.log(greet3()); //return statement 1 ---- this is because it will by default return the first return statement and exit


//Pass a value to function
function greet4(name1) //the function greet4() will accept parameter value
{
    return `Hello ${name1} !!`; 
}

let name1 = 'Saurabh'
let str2 = greet4(name1); //passing the parameter value (using parameter name1) to function greet4()

console.log(str2); //Hello Saurabh !!