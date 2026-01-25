
function sayMyName(){
    console.log('w');
    console.log('a');
    console.log('q');
    console.log('a');
    console.log('r');
}
// sayMyName()

function addTwoNumbers(num1,num2){
    if(typeof num1 === 'number' && typeof num2 == 'number'){

        return num1 + num2;
    }
    else{
        console.log('please enter valid number');
    }
}
const result = addTwoNumbers(3,6)
// console.log('Result: ',result);



function loginUserMessage(userName){

    if(!userName || typeof userName !== 'string'){
        console.log('please enter username');
        return
    
    }
    else{
        return `${userName} just logged in`
    }
}
const login = loginUserMessage('Waqar')
// console.log(login);

// passing rest operator in function  and it gives us an array
function calculateCartPrice(...num1){
return num1
}
// console.log(calculateCartPrice(200,300,400));


//so if we pass some parameter before rest operator then fist two values will go to parameter
//and rest would go in an array

function calculateCartPrice1(val1,val2,...num1){
console.log(val1,val2);    
return num1
}
// console.log(calculateCartPrice1(200,300,400,1000));

const myObj = {
    product: 'Macbook m4 pro',
    price: 1199
}

function getObjValue (obj){

    return `The product is ${obj['product']} and price is £${obj.price}`
}
console.log(getObjValue(myObj));


const myArray = [100,200,300,400,600,1000]

function getForthValue(arr){
    return arr[3]
}
console.log(getForthValue(myArray));




//Article of what I have understand


/*



Functions are block of code  which we can execute . functions can be basic like adding two number or 50 lines of code 
that fetch data from API and do some operation on data. Functions can be use with objects and array too.

There is a difference between function call function() or function reference function. 
Both of these are used a lot depending on your need.  
Functions take some parameter during definition/ declaration 
For example (function function-name(parameter1, parameter2 ){ return})
But when we call the function then we can pass an arguments

Function function-name(num){
Return num + num
}
Function-name(2)
So above line has passed an argument when calling a function 




 */