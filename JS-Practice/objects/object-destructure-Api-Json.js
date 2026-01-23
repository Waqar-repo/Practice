
// can destructure array and objects.

const course = {
    coursename: "js",
    price: 999,
    teacher:'Ahmad'
}
// console.log(course.teacher);

const{teacher: ustad,price,coursename} = course


console.log(ustad,coursename);


//---------------------------------------


const colors = ['red', 'green', 'yellow', 'pink', 'black']



const colors2 = colors[1]
const colors3 = colors[2]
const colors4 = colors[3]
// console.log(colors2);
// console.log(colors3);
// console.log(colors4);

//doing same with destructure

const [color1,color2, ,color4] = colors
console.log(color1,color2,color4);

// better way for array

const {4:fiftyhColor} = colors

console.log(fiftyhColor);

//object
const user = {
  name: 'Waqar',
  age: 25,
  address: {
    city: 'Glenrothes',
    state: 'Fife',
  },
}
//normal way to get value from object
const age1 = user.age

//using Destructuring 

const {age,name:_name}=user
console.log(_name,age);

// Destructuring a nasted object . multi level Destructuring

const {address:{city,state}}=user
console.log(city,state);


// to use with function

function Intro({name,age}){
console.log(name,age);
}
Intro(user)

// multi level Destructuring in function
function Intro({address:{city}}){
console.log(city);
}
Intro(user)


//Article to explain what I have learned

/*
Destructuring


Destructuring is ES6 feature which allow developers to extract the value from an array or object.
Normally we access values of an object like user.age where user is object's name and age is key. 
This is fine but what if we want to have more than one values so we have to write similar code again which is not efficient. 
to solve this problem, es6 has introduced Destructuring.  const {age,name} = user is the syntax 
and we are getting age and name from object user and use age and name as variable in your code 
and we don’t have to do user.age.
Suppose you already have a variable “name” that matches key name in object. In this case
We can const {name:_name} = user. So we are getting the value of name key and putting inside _name ,  
Destructuring an array is almost same . const [color1,color2, ,color4] = colors. but slight difference. 
Here we get value from an array according to index. First value will go to color1 so and so on. 

You can also do multi-level Destructuring. object inside an object. 
Suppose we have an object user and user has another object address which has key value pairs like city,state etc.
to Destructuring this, const {address:{city}=user. 

Similar way we can use Destructuring in function. Imagine we have an object and function.
Function is performing some operations on user age or city name. 
right now we have two option either loop through it or destruct it.
Function info({age}){
Actions on age
}
Info(user)
Here we are destructuring an object and pass it to function, age as parameter and on function call pass object user as argument. 


*/