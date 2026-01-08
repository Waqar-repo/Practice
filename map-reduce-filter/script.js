// let numbers = [1, 2, 3, 4, 5];

// // Your code here
// // Hint: Use forEach or for...of
// numbers.forEach((num) =>{
//     console.log(num*num);
// } )


// let numbers = [1, 2, 3, 4, 5];

// // Your task:
// // 1️⃣ Loop through each number using forEach
// // 2️⃣ Print number * 2
// numbers.forEach((num)=>{
//     console.log(num * 2);
// })

// let numbers = [1, 2, 3, 4, 5];

// // Your task:
// // 1️⃣ Use map to create a new array with squares of numbers
// // 2️⃣ Print the new array

// const result = numbers.map((cv,index,arr)=>{
// return cv * cv

// })
// console.log(result);


// let numbers = [1, 2, 3, 4, 5];

// // Your task:
// // 1️⃣ Use filter to create a new array with numbers > 3
// // 2️⃣ Print the new array

// const result =numbers.filter((cv,index,arr)=>{
// return cv > 3
// })
// console.log(result);



// let numbers = [1, 2, 3, 4, 5];

// // Your task:
// // 1️⃣ Use reduce to calculate the sum
// // 2️⃣ Print the sum

// const result = numbers.reduce((acc,currentVaue,currentIndex,arr)=>{
// return acc + currentVaue
// },0)
// console.log(result);


// let fruits = ["apple", "banana", "orange"];

// // Your task:
// // 1️⃣ Use for-of to loop through fruits
// // 2️⃣ Print each fruit

// for(let fruit of fruits){
    
//     console.log(fruit);
// }


// let fruits = { f1: "apple", f2: "banana", f3: "orange" };

// // Your task:
// // 1️⃣ Use for-in to loop through the object
// // 2️⃣ Print key and value

// for(let key in fruits){
//     console.log(key,fruits[key]);
// }


// let cars = [
//   { color: "purple", capacity: 7 },
//   { color: "red", capacity: 5 },
//   { color: "blue", capacity: 4 }
// ];

// // Your task:
// // 1️⃣ Loop through the array
// // 2️⃣ Print only the colors of the cars

// let colors=[]
// cars.forEach((e)=>{
//     colors.push(e.color)
// })
// console.log(colors);

// let cars = [
//   { color: "purple", capacity: 7 },
//   { color: "red", capacity: 5 },
//   { color: "blue", capacity: 4 },
//   { color: "green", capacity: 6 }
// ];

// // Your task:
// // 1️⃣ Find all cars with capacity >= 6
// // 2️⃣ Save them into a new array called `bigCars`
// // 3️⃣ Print `bigCars`

// let BigCars =cars.filter((e)=>{
//     return e.capacity >= 6
    
// })
// console.log(BigCars);


// let fruits = {
//   f1: { name: "apple", quantity: 10 },
//   f2: { name: "banana", quantity: 4 },
//   f3: { name: "orange", quantity: 12 },
//   f4: { name: "kiwi", quantity: 3 }
// };

// // Your task:
// // 1️⃣ Create a new object called `bigFruits`
// // 2️⃣ Only include fruits with quantity >= 10
// // 3️⃣ Print bigFruits

// let bigFruits = Object.entries(fruits).reduce((acc,[key,value])=>{
//     // console.log(value)
//     if(value.quantity >= 10){
//         acc[key] = value
//     }
//     return acc

// },{})
// console.log(bigFruits);
// for (const [key, value] of Object.entries(fruits)) {
//     console.log("Key:", key);
//     console.log("Value:", value);
// }
// for (const [key, value] of Object.entries(fruits)) {
//     console.log(key, value.name, value.quantity);
// }


// let students = {
//   s1: { name: "Alice", score: 85 },
//   s2: { name: "Bob", score: 72 },
//   s3: { name: "Charlie", score: 90 },
//   s4: { name: "David", score: 65 }
// };

// // Your task:
// // 1️⃣ Create a new object called `topStudents`
// // 2️⃣ Only include students with score >= 80
// // 3️⃣ Transform each value so it only contains the `name` (remove score)
// // 4️⃣ Print topStudents
 
// let topStudents = Object.entries(students).reduce((acc,[key,value])=>{
// if(value.score >= 80){
//     acc[key] = value.name
// }
// return acc
// },{})

// console.log(topStudents);



// let carsObj = {
//   car1: { color: "purple", capacity: 7 },
//   car2: { color: "red", capacity: 5 },
//   car3: { color: "blue", capacity: 4 },
//   car4: { color: "green", capacity: 6 }
// };

// Your code here
// Hint: for (let key in carsObj) { ... }

// for(let key in carsObj){
//     console.log(key,carsObj[key]);
// }

// Your code here
// Hint: for (let [key, car] of Object.entries(carsObj)) { ... }

// for(let [key,cars] of Object.entries(carsObj)){
//     console.log(key,cars);
// }



// Your code here
// Hint: Object.fromEntries(Object.entries(carsObj).filter(([key, car]) => ... ))

// const result = Object.fromEntries(Object.entries(carsObj).filter(([Key,car])=>{
    
//     return car.capacity >= 6
    
// }))
// console.log(result);



// Your code here
// Hint: Object.entries(carsObj).reduce((acc, [key, car]) => { ... }, {})

// const result = Object.entries(carsObj).reduce((acc,[key,car])=>{
//     if(car.color === 'red'){
//         acc[key] = car
//     }
//     return acc
// },{})
// console.log(result);




let carsObj = {
  car1: { color: "purple", capacity: 7 },
  car2: { color: "red", capacity: 5 }
};

for (let carKey in carsObj) {

  let car = carsObj[carKey];

  for (let prop in car) {
    
    console.log(carKey, prop, car[prop]);
  }
}
