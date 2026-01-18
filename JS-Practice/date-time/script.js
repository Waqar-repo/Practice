// dates and time

let myDate = new Date()
console.log(typeof myDate);
console.log('toString ',myDate.toString());
console.log('toDateSting   ',myDate.toDateString());
console.log('TolocaleString  ',myDate.toLocaleString());
console.log('toISOString',myDate.toISOString());
console.log('toJason   ',myDate.toJSON());
console.log('toLocaleDateString  ',myDate.toLocaleDateString());

console.log('-----------------------------------');

// to declare specific date

let myCreatedDate1 = new Date(2025,10,27) //month starts with 0 which is jan
let myCreatedDat2e = new Date(2025,10,27,23,30) // you can also add time 


//otyher way to declare dates like in different formate

let myCreatedDate3 = new Date('2025-11-27')  // yy/mm/dd

let myCreatedDate4 = new Date('11-25-2025') // you cal also do mm-dd-yy 

console.log(myCreatedDate4.toDateString());
console.log(myCreatedDate4.toLocaleString());
console.log(myCreatedDate4.toDateString());


// time stamps 

console.log('--------Time Stamp----------------');

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());

let difference = myCreatedDate4.getTime() -myTimeStamp 
let daysAgo = Math.abs(difference)/(1000 * 60 * 60 * 24)
console.log(daysAgo.toPrecision(2) ,'days has been passed');

console.log('-----Ramadan Function------');

// let ramadanStart = new Date(2026,1,18)
// let currentTime = Date.now()

// let difference2 = ramadanStart.getTime() - currentTime


// let daysToGo = Math.abs(difference2) / (1000 * 60 * 60 * 24)
// console.log(daysToGo);

function ramadanStart(){
let ramadanStart = new Date(2026,1,18)
let currentTime = Date.now()

let difference2 = ramadanStart.getTime() - currentTime


let daysToGo = Math.abs(difference2) / (1000 * 60 * 60 * 24)
console.log( `${daysToGo.toPrecision(2)} days left for ramadan`);
}
ramadanStart()



//other methods

console.log('-----------other methods-----------------------');

let newDate1 = new Date()
console.log(newDate1.getDate());

console.log(newDate1.getMonth()+ 1);

console.log(`date is : ${newDate1.getDate()} ${newDate1.getMonth()+ 1} ${newDate1.getFullYear() } and time is ${newDate1.getHours()}:${newDate1.getMinutes()}:${newDate1.getSeconds()}`);

 // important method

 console.log(newDate1.toLocaleString('default',{
    weekday: "long",
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
hour:"numeric",
   minute:"2-digit",
    }));

    //practice

/*

1 second = 1000 ms
1 minute = 60 * 1000 ms
1 hour = 60 * 60 * 1000 ms
1 day = 24 * 60 * 60 * 1000 ms



*/


    function countdownToDate(){
        let countDown = new Date(2026,1,18)
        let todayMs = Date.now()

        let diff = countDown.getTime() - todayMs
   

        let toGoDays = diff / (1000 * 60 * 60 * 24)
       
      let remainig = Math.floor(diff) - (toGoDays * 24 * 60 *60 * 1000)

      let hours = Math.floor(remainig / (1000 * 60 *60))

      remainig-= hours * 60 * 60 * 1000

      let minute = Math.floor(remainig / (1000 * 60))
      remainig-= minute * 60 * 1000

      seconds = Math.floor(remainig/1000)

        console.log(`${Math.floor(toGoDays)} days ${hours} hours ${minute} minutes ${seconds} seconds left `);
    }
    
    countdownToDate()