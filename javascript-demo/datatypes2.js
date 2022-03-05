//String

//Concatenate values
let fname = 'Saurabh'
let lname = 'Patel'

console.log(fname + lname) //OP: SaurabhPatel

console.log(fname +' '+lname) //OP: Saurabh Patel

//Escape characters
//" and ' has a special meaning and to treat is as a normal string text, use \ backslash
let name1 = '\"Saurabh Patel\'s Home\"'
console.log(name1) //OP: "Saurabh Patel's Home"

//New Line - \n 
let name2 = 'Saurabh \nPatel'
console.log(name2) //OP: Saurabh
                       //Patel

//tab - \t
let name3 = 'Saurabh \tPatel'
console.log(name3) //OP: Saurabh 	Patel

//Boolean - true or false
let bool = 5>6
console.log(bool) //OP: false

console.log(typeof bool) //OP: Boolean

//Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.
//null - its a keyword and it specifies that it is empty or doesn't exist
let nullName = null
console.log(nullName) //OP: null

//Undefined means a variable has been declared, but the value of that variable has not yet been defined. For example:
//undefined - the variable is undefined as no value has been assigned
let undefName
console.log(undefName) //OP: undefined
