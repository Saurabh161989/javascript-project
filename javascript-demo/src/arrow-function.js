// => arrow function (named arrow function like add2 is function name)
//remove function keyword and add => after ()
let add2 = (num1, num2) => {
    console.log("hey there!");
    return num1 + num2;
}

let result2 = add2(6, 4);
console.log(result2);

//if function has only 1 statement you don't need to mention it in curly brackets and also no need to mention return
let add3 = (num1, num2) => num1 + num2;

let result3 = add3(6, 8);
console.log(result3);

//normal function
let add1 = function (num1, num2) {
    return num1 + num2;
}

let result1 = add1(5, 4);
console.log(result1);