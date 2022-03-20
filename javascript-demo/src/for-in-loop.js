let alien = {
    name : 'Saurabh',
    age : 32,
    laptop: {
        cpu : 'i7',
        branch : 'Apple',
        ram : 8
    }
}

//print all the properties using for in loop
for(let K in alien)
{
    console.log(K);
}

/*
name
age
laptop*/

//print all the property values using for in loop
for(let V in alien)
{
    console.log(V, alien[V]);
}

/* 
name Saurabh
age 32
laptop { cpu: 'i7', branch: 'Apple', ram: 8 }
*/

//print all the property values of laptop using for in loop
for(let L in alien.laptop)
{
    console.log(L, alien.laptop[L]);
}

/* 
cpu i7
branch Apple
ram 8
*/


