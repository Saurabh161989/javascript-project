//object has properties and behavior (functions or method)
//behavior for an object is called method or function

//here greet is a method or function defined under laptop object
let laptop = {
    cpu : 'i7',
    ram : 16,
    brand : 'apple',

    greet : () => {
        console.log("Welcome User!!");
    }
}

//to call a method or function which is defined inside an object. use ObjectName.MethodName
laptop.greet();