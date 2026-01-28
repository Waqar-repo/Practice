
This keyword :

This keyword is very tricky it refers not where the function is written but how a function is called.
This has different behaviour in classic function, arrow function and object.
Arrow function refers to this to its outer scope and inherent from outer, it could be other function or global. 
Classic function refers to global (windows object model) but everything changes when you have functions inside an object. 
Classic function inside object would refer to its context (variable, value etc) 
const user = {
    username:'Waqar',
    price: 999,
    welcomeMessage: function(){
console.log(`${this.username}, welcome to website`)
   console.log(this);
    }
}
user.welcomeMessage()
the above code would work as function is inside an object and in this case, this will refer to object context.  But arrow function would not have this context.
But Suppose we have an object, and inside the object there is a normal (classic) function, and inside that classic function there is an arrow function. In this case, the arrow function will inherit this from its parent classic function, so it will refer to the object context. Normal functions as methods of objects work as expected. Arrow functions will only refer to the global object or undefined if their outer lexical scope does not provide a valid this (for example, if the arrow function is defined globally or inside a plain function called in the global scope).


Arrow Function:

Arrow function is modern way to write function it is mostly used as call back function. 
You can implicit return and explicit return . 
Implicit return 
 const addTwo2 = (num1,num2)=> num1 + num2
with parentheses 
 const addTwo3 = (num1,num2)=> (num1 + num2)
explicit return 
const addTwo = (num1,num2)=>{
    return num1 + num2
}

To return an object in implicit return arrow function, we need to use curly braces 
const addTwo4 = (num1,num2)=> ({usernamne:'Ahmad'})
