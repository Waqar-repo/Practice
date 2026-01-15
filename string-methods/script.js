const name = "Hi I am Waqar Ahmad"
// const str = 'aaabbbcccdeee'
const num = '33'
let num2 = Number (num) + 3
// console.log(name[0]); 
// console.log(num2);
console.log(name.__proto__)
// console.log(name.replace('a', 'i'));  // replace the first matching char in the string 

// console.log(name.replaceAll('a', 'i'));  // replace the all matching char in the string 



// console.log(num.padStart(10,'*'));   // add pad from start 

// console.log(num.padEnd(10,'*'));  // add pad at end

// const t = 'Waqar'
// console.log(name.search(t)); // search and return the index or -1 if not found

// console.log(name.includes('W'));  // check the string if it contain substring and return true false

// console.log(name.indexOf('a'));   // return the index of first matching character in string
// console.log(name[5]);            // return 5 index of first found a in a string
// console.log(name.lastIndexOf('a'));  // it return the index of last matching 
// console.log(name[17]);

// function ind(arr){
//     for(let char of arr){
//         if(arr.indexOf(char) === arr.lastIndexOf(char)){
//             return char
//         }
//     }
//     return null
// }
// console.log(ind(str));

// console.log(name.slice(0,3)); // it returns the  a new string start index and end index but end index excludes 

// console.log(name.concat(' Hell'));  // add new string to old one


// practice

const Input =  "hello"

function reverse(str){
    // return str.split('').reverse().join('')
    const split = str.split('')
    // console.log(split);
    const reverse = split.reverse()
    // console.log(reverse);
    const string = reverse.join('')
    // console.log(string);
    return string
}

console.log(reverse(Input));

const input2= 'madam'
console.log(input2.includes('madam'));





const input3 = "javascript"

function vowel(v) {
    const vowels = 'aeiou'
    let count = 0

    for(let char of v.toLowerCase()){
        if(vowels.includes(char)){
           
            count++
            
        }
        else{

        }
    }
    console.log(count);
}
vowel(input3)


const Input4=  "aabbcdd"

function nonRep(str){
    for(let char of str){

        if(str.indexOf(char) === str.lastIndexOf(char)){

            return char
        }
        
    }
}

console.log(nonRep(Input4));




const Input5 = "hello world"

const split2 = Input5.split(' ')
const  upper1 = split2[0].replace('h','H')
const upper2 = split2[1].replace('w','W')
const newstr = upper1.concat(' ',upper2)
console.log(newstr);


const Inpu6 =  "aaabbc"

function rep(r){
    let temp = {}
    let maxcount = 0
    let maxchar = ''
    for(let char of r){
   temp[char] = temp[char] || 0
   temp[char]++
    }
    for(let c in temp){
        if(temp[c]> maxcount){
            maxcount = temp[c]
            maxchar = c
        }
        
    }
    return maxchar +' '+ maxcount
}
console.log(rep(Inpu6));







