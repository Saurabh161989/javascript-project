let num1 = 4
let num2 = 2

let result = num1 + num2
console.log(result) //6

//remainder
result = 5 % 2
console.log(result) //1

//boolean addition
num1 = true
num2 = true
console.log(num1 + num2) //2 ........JS will apply implicit conversion and will convert boolean into number because of addition + operator. here the first number that we get for true is 1.

//
num1 = 4
//num1 = num1 + 2

num1 += 2 //shorthand operators
console.log(num1) //6

num1++ //post-increment
console.log(num1) //7

++num1 //pre-increment

//-----------------------------
//a = b++ here two things will happen Assignment and Increment. Since this is post-increment, it will assign the value to a and then it will increment
num = 4
let x = num++
console.log(x, num) // 4 and 5

num = 4
x = --num
console.log(x, num) // 3 and 3

//cube of number
num = 6
result = Math.pow(num, 3)
console.log(result) //216

//or you can use
let result1 = num ** 3
console.log(result1) //216 ... * is multiplication and ** is power

