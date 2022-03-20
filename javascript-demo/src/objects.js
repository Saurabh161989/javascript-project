//Objects - it has some certain properties
//Object literal

let alien = {}; //this is also an object even though no property has been defined.

console.log(typeof alien); //object

//------------------------

let alien1 = {
    name: 'Saurabh',
    age: 32,
    profession: 'Software QA Engineer'
}

console.log(alien1); //Output - { name: 'Saurabh', age: 32, profession: 'Software QA Engineer' }

//dot operator is used to fetch the property of an object or use [] square bracket

console.log(alien1.name); //Saurabh
console.log(alien1['age']); //32

//----------------------------
//to give property name more than 1 word, you can use it in single quotes
//if property name is of more than 1 word, you'll have to use [] square brackets
let alien2 = {
    'first name' : 'Saurabh',
    'last name' : 'Patel'
}

console.log(alien2["first name"]);
console.log(alien2["last name"]);

//-------------------------------
let input = 'name';

let alien3 = {
    name: 'SaurabhP'
}

console.log(alien3[input]); //SaurabhP