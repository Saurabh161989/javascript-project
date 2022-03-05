/*In JS, datatypes are mainly of 2 types - primitive and object

Primitive - Number, String, Boolean, Null, Undefined, Symbol*/

//If you want to work with bigger number, use BigInt (this is subtype of number)
//BigInt is a special type where you can have a bigger number. To use it add 'n' at end of value

let bigNum1 = 1111122222333334444455555666667777788888
console.log(bigNum1) // output: 1.1111222223333345e+39 - you are loosing the some numbers i.e after 45.

let bigNum2 = 1111122222333334444455555666667777788888n
console.log(bigNum2) //output: 1111122222333334444455555666667777788888n --represent the number as it is

//perform operation on BigInt
console.log(bigNum2 + 2n) //output: 1111122222333334444455555666667777788890n

//Floating number
let decNum = 29.95
console.log(decNum) //output will be 29.95 i.e number datatype supports floating point representation

//What to use if you want to know the datatype of value?
//use 'typeof' - its an operator

let num1 = 5
let name1 = 'SP'
let num2 = 5.55

console.log(typeof num1) //output: number

console.log(typeof name1) //output: string

console.log(typeof 33333) //output: number

//hexadecimal
let hexNum = 0xff
console.log(hexNum) //output: 255

//exponential
let expNum = 1.5e10
console.log(expNum) //output: 15000000000

//using underscore
let undNum = 100_00_000
console.log(undNum) //output: 10000000 - it will ignore the underscore

//Infinity
let num3 = 5/0
console.log(num3) //output: Infinity

//Nan - not a number
console.log(5/ "abc") //output: Nan