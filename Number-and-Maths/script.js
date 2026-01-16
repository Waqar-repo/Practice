const score = 400

console.log(score);
const balance = new Number (1000)

console.log(balance);

console.log(balance.toString());  // convert number to string

console.log(balance.toFixed(2)); //how many decimal value you want

const  otherNum = 234.98765554345334345343453543453335
const stOtherNum = otherNum.toString()
const point = stOtherNum.indexOf('.');
console.log(point);

console.log(otherNum.toPrecision(point+2)); // total value including decimals . number has to be precise


const hundreds = 100000
console.log(hundreds.toLocaleString('en-UK')); // returns a string in formated 

//-------------math------------------

console.log('-----------math---------------');


console.log(Math);
console.log(Math.sqrt(25)); //square root of a number

console.log(Math.abs(-4)); // convert minus value intp positive value not other way around

console.log(Math.round(4.6));  // self explain 4.6 be 5 and  4.4 be 4

console.log(Math.ceil(4.6)); // 4.6 => 5

console.log(Math.floor(4.6));  // 4.5 => 4
console.log(Math.pow(5,2));  

const arr = [1,2,3,4,5,6]
console.log(Math.max(...arr));   // return min or max number . 

const min = 20

const max = 30

console.log(Math.floor(Math.random() * (max - min + 1))+ min);