
//can make objects using two ways, literal and constructor
//singleton object made using constructor

// Object.create  //=> singleton


// object literals

const mySym = Symbol('key1')

const jsUser = {
name: 'Waqar',
'full name': 'Waqar Ahmad',
[mySym]:'key1',
age: 25,
location:'fife',
email:'vizz@gmail.com',
isLoggedIN: false,
lastLoggedIN: []

}

// freez an object that no one can change

// Object.freeze(jsUser)


// to access 

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


// to change it value

jsUser.email = 'ahmad@gmail.com'
console.log(jsUser['email']);

// Object.freeze(jsUser) // so changes will happen after this as we have freez the object

jsUser['full name'] = 'Vizz Ahmad'
console.log(jsUser['full name']);

console.log(jsUser);



//adding a fucntion in object

jsUser.greeting = function(){
    console.log('Hello Js user');
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

function LogInDay(){
    let date1 = new Date()
    console.log(date1.toLocaleString('en-US',{weekday:'short'}));
    jsUser.lastLoggedIN = date1.toLocaleString('default',{weekday:'short'})
}
LogInDay()
console.log(jsUser);



//Artical to explain what I have learned


/*

You can declare objects in two ways. 1: object literal 2: constructor.
 if object was made using constructor is called singleton.
Object is declared using curly brackets and we store values 
as key value pairs and we access the value using key, 
 unlike array where each element is accessed only using its index. 
There are two ways that we can use to access or change its value 
1: with dot operator (jsUser.email) 2: jsUser[“email”]
2nd option is different as you have to pass key as a string. 
Objects can also contain a symbol. But it has to be added differently than normal key value pairs.
For symbols, use [mySym] : ‘key1’. But there is a difference, to access it we need to use 
jsUser[mySym] without string ‘ ’( jsUser[“mySym”] ) .

Object.freez(object name) would stop changing the abject value afterwards






*/
