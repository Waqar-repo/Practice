

//declare object using contructor

const faceBook = new Object() //singleton object
const faceBook1 = {}         // non singleton object

//adding key value pairs to an empty object

faceBook.id = '123abc';

faceBook.name = 'Ahmad';

faceBook['isLoggedIn'] = false;

// console.log(faceBook);

// object inside object

const regularUser = {
  email: 'waqar@gmail.com',
  fullname: {
    userFullName: {
      firstname: 'Waqar',
      lastname: 'Ahmad',
    },
  },
};

// optional channing ? is provide protection. it will only look for userFullName if fullname exist.
//commonly used in api calling etc

console.log(regularUser.fullname?.userFullName.firstname);

// sometime you need to combine two objects

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };

const obj3 = {obj1,obj2}  // not a best approach as it will create objects in side an object

console.log(obj3);

// object.assign copies one or more source object to target object and returns modified target object
// better practice, pass empty object {} as target and rest object will be copied into empy object

const obj4 = Object.assign({}, obj2, obj1);

console.log(obj4);

// this is same as array to use spread operator. easy and mostly used.
// it will spread all objects inside to sinle object

const obj5 = { ...obj1, ...obj2 };

console.log(obj5);

// from data base values syntax

const users = [
  {
    id: 1,
    email: 'g@gmail.com',
  },
  {
    id: 2,
    email: 'g2@gmail.com',
  },
  {
    id: 3,
    email: 'g3@gmail.com',
  },
];
console.log(users);
// if we have array of objects so this is way we can access its value
console.log(users[0].email);
console.log(users[1].id);
console.log(users[2].email);

// but we can also do some other methods which helps getting key,values and entries
console.log(faceBook);
//this will get all keys from object and return a array which is very usefull loop etc

console.log(Object.keys(faceBook));

//this will get all values from object and return a array which is very usefull loop etc

console.log(Object.values(faceBook));

//return every key value pair in array . if have three object, it will return an array of array
//and each nasted array will have key value pair. 1st value is key and 2nd is value

console.log(Object.entries(faceBook));


// object.hasOwnProperty('propertyname') this method is a security check before use or loop over
//it return a boolean. 

console.log(faceBook.hasOwnProperty('id'));



//--------------------------------------------------------------------------------------//



//Article to explain what I have learned


/*

Objects are very useful and widely use in databases and API.
As we already know we can create object in two ways using constructor
 or object literal (non singleton object). If we create empty object then we can add key and values. 
 Here we take the example of object name faceBook{}. Facebook.id = 12, faceBook.name = ‘ waqar’. 
 So id and name would be the key and 12 and Waqar would be its values respectively.

Object can be nested objects (objects inside an object) we can use dot operator to get desired value 
we can use syntax“regularUser.fullname?.userFullName.firstname”.
There is an optional Channing “?” question mark, it is for protection and stopping our code to return not defined .
 in the example above it will only check further if we have fullname key. If not, it will not go further. 

We can have two objects that we want to combine into one object.
 We can do const obj3 = {obj1,obj2} but it would create nested objects and not ideal if we want a flat object. 
 To solve this problem, we have two solutions.
 1:  object.assign(target,source) method.  For example const obj3 = Object.assign(obj1,obj2)
Obj1 is target so it will also modify and obj3 == obj1.
 But for better practice we can const obj3 = Object.assign({},obj1,obj2)
we pass empty object as target and obj1,obj2 as source. 
2: like we  can use spread operator with array, we can also use in objects 
const obj5 = { ...obj1, ...obj2 } simple and does the job 😊.

Just imagine we are getting data from API or data base, and normally we get array of objects .
 users[0] users is array of object and users[0] mean we are accessing 1st object at 0 index in array and 
 then users[0].email we are getting its email address. 

If we want to get all keys in object then we can use a method Object.keys(faceBook) which return us array of key.
similarly Object.values(faceBook) returns the value of object facebook.
 But Object.entries(faceBook) returns the array and each key value has its own array [‘id’,123] 
 the 1st element is key and 2nd is its value.
object.hasOwnProperty('propertyname') this method is a security check before use or loop over. 
Returns the Boolean. Basically it is used to check if this property exists and
 we normally use in if else to check if this property exists then we perform some actions on it.  







*/