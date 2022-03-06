//Type Conversion - if you want to convert data into different data type Ex: number to string

//Suppose if you want to store information like Zipcode or Mobile number. What will you use? Number or String? String is good option.
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

