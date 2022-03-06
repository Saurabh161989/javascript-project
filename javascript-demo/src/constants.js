/* If you know that the variable value will not change and be constant throughout code, 
use const keyword for declaring variable. Ex: value of Pi */

let radius = 5
const pi = 3.14

//pi = 4  -- if we try to assign a new value, it will throw an error.
console.log(pi * radius * radius)
