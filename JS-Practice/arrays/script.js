// array 
const myArr = [0,1,2,3,4,5]




const myArr2 = new Array(6)
console.log(myArr2);
// console.log(myArr,myArr2);

// arry methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// const pop = myArr.pop()
// console.log(pop);
// console.log(myArr);


// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()


// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);



//slice / splice

// console.log('A', myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log('B', myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log('C',myArr);



// console.log(...myArr); spreadoperator

// part  two

const marvelHeros = ['thor','ironman', 'spiderman']
const dcHeros = ['superman','flash','batman']

// marvelHeros.push(dcHeros)

// not good way if you want to access an array inside of an array's 1st element
// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);  


// this return a new array and all elements are in one array
// const allHeros= marvelHeros.concat(dcHeros)  
// console.log(allHeros);  


// better way is to use spread operator [...]

// const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);




const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray.sort((a,b)=> b-a))

// convert to array

// true ot fales if array or not
console.log(Array.isArray('waqar'));  
let name = 'waqar'
let lastName = 'ahmad'
// convert to an array

console.log(Array.from(name,(x)=>x+x));   // intersting


let score1 = 100
let score2 = 200
let score3 = 300

// take multiple set of arguments to convert into array
console.log(Array.of(score1,score2,score3)); // intersting
