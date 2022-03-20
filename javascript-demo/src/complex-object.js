//complex object
let alien1 = {
    name : 'Saurabh',
    age : 32, //it will ignore this last comma and not throw an error
}

console.log(alien1); //{ name: 'Saurabh', age: 32 }

//-------------------
//object within an object. laptop is an object inside alien2 object
let alien2 = {
    name : 'Saurabh',
    age : 32,
    laptop : {
        cpu : 'i7',
        ram : 8,
        brand : 'Apple'
    }
}

console.log(alien2);
//OUTPUT
/*{
  name: 'Saurabh',
  age: 32,
  laptop: { cpu: 'i7', ram: 8, brand: 'Apple' }
}*/

console.log(alien2.laptop); //{ cpu: 'i7', ram: 8, brand: 'Apple' }

console.log(alien2.laptop["cpu"]); //i7
//OR
console.log(alien2.laptop.cpu); //i7

//------------------

//using ? mark
//console.log(xyz); //here alien3 is not defined. Output: ReferenceError: alien3 is not defined

//incase if you're not sure if the object or property doesn't exist, you ? question mark
let alien3 = {
    name : 'Saurabh',
    age : 32,
    laptop : {
        cpu : 'i7',
        ram : 8,
        brand1 : 'Apple'
    }
}

//console.log(alien3.laptop.brand.length()); //this will throw error because brand property do not exist

console.log(alien3.laptop.brand123?.length()); //this will not throw an error

//-----------------------------------
//delete a property

let alien4 = {
    name : 'Saurabh',
    age : 32,
    laptop : {
        cpu : 'i7',
        ram : 8,
        brand1 : 'Apple'
    }
}

delete alien4.laptop; //delete laptop property
console.log(alien4); //{ name: 'Saurabh', age: 32 }

delete alien4.name; //delete name property
console.log(alien4); //{ age: 32 }






