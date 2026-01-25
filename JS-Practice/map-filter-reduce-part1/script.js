
const months = ['January', 'February', 'March', 'April', 'May', 'June','December']

//foreach does not return anything
//first parameter is element itself and 2nd parameter is index of that element
//third parameter is the array itself

const monthss = months.forEach((month,index,arr)=>{
    // console.log(index, month);
    // console.log(arr);
    // return month
})
// console.log(monthss); // undefined as forEach return undefined




//map return an array which we can save to a variable
//first parameter is element itself and 2nd parameter is index of that element
//third parameter is the array itself
// it add to new array what every we return

const capitalMonths = months.map((month,index,arr)=>{
    // console.log(index,month);
    // console.log(arr);
    return month.toLocaleUpperCase()
})

// console.log(capitalMonths);


//filter


// filter returns similar to the array or less than orignal array
//first parameter is element itself and 2nd parameter is index of that element
//third parameter is the array itself
// filter return only thoese element of the array which is true on given condtion
//if we simply return true then all elements would be return and false would be empty array

const filteredMonth = months.filter((month,index,arr)=>{
//     console.log(month);
// return month.toLocaleLowerCase().includes('m')
if(month.toLocaleLowerCase().includes('m')){
    // console.log(index,month);
    return month
}
})

// console.log(filteredMonth);



const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 18,
    },
    {
        name: 'Raman',
        age: 23,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]

const adultStudents = students.filter((student,index,arr)=>{

    return student['age'] >= 18


}).map((students)=>{
    return students['name']
}).filter((student)=>{
    return student[0] == 'A'
})

// console.log(adultStudents);





// practice 

/*

🧠 Challenge 1

From months, create an array of:

months that have more than 5 letters

converted to lowercase

*/

const moreThanFiveLetters = months.filter((month)=>{
    return month.length > 5
}).map((month)=>{
    return month.toLocaleLowerCase()
})







/*

🧠 Challenge 2

From students, get:

names of students

who are under 18

names should be uppercase

*/

const underAgeStudent = students.filter((student)=>{
    return student.age < 18
}).map((student)=>{
    return student.name
})




/*

🧠 Challenge 3 (thinking one)

Get only the first letters of adult students’ names.

*/

const adultAgeStudent = students.filter((student)=>{
    return student.age >= 18
}).map((student)=>{
    return student.name[0]
})



//Artile what I have understand


/*


Map, filter and reduce
“Map and filter iterate over an array to produce a new array.”
Map take few parameters map(element,index,array). 
Element is the each element of the array and index is the index of that element and array is array itself.  
Map also returns an array. What every you would put after return would be put into a new array but not good practice. 
We normally loop over an array and return some results like loop over a student array and upper case all user name.  
Map iterates over an array and transforms each element into a new array.

filter is different than map it also iterates over an array and return the element to new array  that justify condition
If we return true it will put all element of the array into new array or of we return false it will return an empty array.
For example we are looping on student array of object and returning only those objects where student age is greater than 18.
 So it will put all object into array who pass the condition. 
Filter iterates over an array and returns a new array containing only elements that satisfy a condition



*/