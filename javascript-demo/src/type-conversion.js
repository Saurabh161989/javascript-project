//Type Conversion - if you want to convert data into different data type Ex: number to string

//Suppose if you want to store information like zip-code or Mobile number. What will you use? Number or String? String is good option.
//if you want to perform operations you store number in number data type otherwise you can store it as string datatype

/*Coercion is the process of conversion of data from one type to another
There are two types of coercion in JavaScript:
Type Coercion or Implicit Coercion: Type conversion is done implicitly by JavaScript.
Type Conversion or Explicit Conversion or Explicit Coercion: Type conversion is done explicitly in code using the inbuilt functions like Number(), 
String(), Boolean(), etc. */

//This is Explicit conversion
//store value 6 in string format
let num = String(6)
console.log(num, typeof num) //OP: 6 string

//store value in number format
let num1 = Number("25")
console.log(num1 + 5, typeof num1) //OP: 30 number

//Type Coercion or Implicit Coercion
let x 
console.log(x, typeof x) //undefined undefined

x = 8
console.log(x, typeof x) //8  number

x = x + "abc" //here x is number and "" is string so Javascript will implicitly convert number  to string

x = 8
console.log(x, typeof x) //8abc string

x = x - 2
console.log(x, typeof x) //6 number if we have a subtraction operator with string, javascript will convert string into number and this is implicit conversion

//Exclamation ! is NOT. 
x = !x //x is number so !x is not a number so boolean
console.log(x, typeof x) //false boolean .. 

//if you try to convert a number into boolean, the boolean value will be returned as false for 0 (zero) and true for any other value other than zero
x = 16
console.log(Boolean(x), typeof Boolean(x)) //true boolean

x = 0
console.log(Boolean(x), typeof Boolean(x)) //false boolean

console.log(Boolean(null)) //false

console.log(Boolean(undefined)) //false

console.log(Boolean("Saurabh")) //true



//-------------------------------------------------------------
x = "123 Saurabh"
console.log(x) //123 Saurabh

x = parseInt("123 Saurabh") //parseInt is a function that will accept the string and convert it into the number
console.log(x) //123

x = parseInt("N123 Saurabh")
console.log(x) //NaN because the first character is not number