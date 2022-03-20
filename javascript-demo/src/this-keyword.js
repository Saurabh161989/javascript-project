//
let laptop1 = {
    cpu: 'i7',
    ram: 16,
    brand: 'apple',

    getConfig1: () => {
        console.log(cpu);
    }
}

//laptop1.getConfig1(); //error - ReferenceError: cpu is not defined

//here cpu is not a variable but property of an object. So to use it, you need to mention ObjectName.PropertyName
//------------------------------------------------

let laptop2 = {
    cpu: 'i7',
    ram: 16,
    brand: 'apple',

    getConfig2: () => {
        console.log(laptop2.cpu);
    }
}

laptop2.getConfig2(); //i7

//why use This? Instead of using ObjectName.PropertyName use This.PropertyName. Here This represents the current Object in which the Properties are defined.
//so if you want to access any properties of object, use This keyword.  
//--------------------------------------------------

let laptop3 = {
    cpu: 'i9',
    ram: 16,
    brand: 'apple',

    getConfig3: () => {
        console.log(this.cpu);
    }
}

laptop3.getConfig3(); //i9