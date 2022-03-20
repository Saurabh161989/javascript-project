//
let name1 = 'Saurabh'; //this is a global variable

function greet(n) //variable n which is in parenthesis is a local variable
{
    let num = 5; //variable defined in a function is a local variable
    console.log(num);
    return `Hello ${n}`
}


//console.log(num); -- if you execute this line of code, it will throw error as you cannot use a local variable outside of a function

let msg = greet(name1);

console.log(msg);

//-------------------
function add(num1, num2){
    return num1 + num2;
}

let var1 = add(4,8);
console.log(var1); //Output 12

let var2 = add(2,6,9);
console.log(var2); //Output 8.. it will just ignore 9

//------------------------------
function add1(num1, num2, num3){
    return num1 + num2 + num3;
}

let var3 = add1(6,4);
console.log(var3); //NaN

//------------------------------
function add2(num1, num2, num3 = 2){
    return num1 + num2 + num3;
}

let var4 = add2(6,4);
console.log(var4); //12 it will use num3 = 2 as value by default if num3 param value is not passed while calling function

let var5 = add2(6,4,5)
console.log(var5); //function will use the parameter value that is passed i.e. 5 and not the value which is defined in function parenthesis

