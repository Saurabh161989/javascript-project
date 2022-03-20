//let var1 = a + b;
//in above line, a + b is an expression i.e. it will evaluate the values and than assign it to variable

//In JS, treats function as an object. 

//below is an anonymous (because the function doesn't have name) function that takes 2 parameters and this function is assigned 
//to a variable add. This is called a function expression as the function needs to be evaluated and then assign it to variable

let add = function(num1, num2)
{
      return num1 + num2;
}

//above function doesn't have a name but its assigned to variable add

console.log(add(5,6));