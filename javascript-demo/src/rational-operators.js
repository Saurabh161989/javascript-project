
//comparison will result into boolean value

console.log(5 > 6) //false

console.log(7>6) //true

let abc = 7 > 6
console.log(abc) //true

abc = 6 <=6
console.log(abc) //true



//string comparison
//it will take each character and compare its Ascii values
let x = "Pen"
let y = "Book"

abc = x > y

console.log(abc)

//compare string and number
console.log("2" > 1) //true .. here string "2" will be implicitly converted to number and so 2 > 1 is true


// == is equal comparison and = is assignment
//always use === for comparison
//Why?
// == operator only compares the Data value and not Data Type
// === operator will compare both the data value and data type

x = "3"
y = 3
console.log(x == y) //true.. here JS will implicitly convert "3" string to number and then compare

console.log(x === y) //false.. because in comparison we also want that datatype should be same so always use ===