//if statement
// const isUserLoggedIn = false
const temp = 51
if(2 === '2'){
console.log('executed');
}
// if(temp < 50){
//   console.log('temp is less than 50');
// }else{
//   console.log('temp is > 50');
// }

const balance = 1000

// if(balance > 500) console.log(`is rich`);

// if(balance < 500){
// console.log('less than 500');
// } else if( balance < 750){
//   console.log('less than 700');
// } else if(balance < 900){
//   console.log('less than 900');
// } else{
//   console.log('less than 1200');
// }

const isUserLoggedIn = true
const dabitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = false
if(isUserLoggedIn && dabitCard && loggedInFromEmail || loggedInFromGoogle){
  console.log('Allowed to buy');
}

const month = ''
switch(month){
  case 'jan':
    console.log('january');
    break;
  case 'feb':
    console.log('Feb');
    break;
  case 'mar':
    console.log('march');
    break;
  
}

// truthy value
/*

'0' zero in string
'false' false in string 
" " empty space in string
[] empty array
{} empty object
 function(){} empty function 

*/


// falsy value
/*

false , 0 , -0 , BigInt 0n, '' , null , undefined , NaN

*/
const userEmail = []
if(userEmail){
  console.log('Got user Email');
} else{
  console.log('Dont have user Email');
}

if (userEmail.length === 0){
    console.log('Array is empty');
}


const emptyObj = {
  name:'waqar',
  age:32,
  address:
        {
          city: 'Glenrothes',
          county:'fife',
        }
}

if(Object.keys(emptyObj).length === 0){
  console.log('object is empty');
  
} else{
  console.log('object is not empty');
  console.log(Object.keys(emptyObj));
  console.log(Object.keys(emptyObj['address']));
  
}

const newObj = {...emptyObj} // shallow copy

const newObj1 = structuredClone(emptyObj)
newObj1.address.city = 'Kirkcaldy'
console.log(emptyObj);
console.log(newObj1);



//nullish Coalescing Operator (??)  : for  null undefined 

let val1;
// val1 = 5 ?? 10


// val1 = null ?? 10

function dB (){
  let a = 5
  return a + 1
}

val1 = undefined ?? dB()

console.log(val1);

// terniary operator

let val2 = 0;

let result = val2 ? 'true' : 'false';

console.log(result);