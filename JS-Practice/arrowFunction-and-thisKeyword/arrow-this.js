const user = {
    username:'Waqar',
    price: 999,
    welcomeMessage: function(){

    // this refer's current context

   console.log(`${this.username}, welcome to website`);
   console.log(this);
    }
}
// user.welcomeMessage()

//when we update the username value also change the current context (current values variables etc)

// user['username'] = 'Ahmad'
// user.welcomeMessage()

//if console this refer's to global object which is windows object 
// console.log(this);


// when we call one() it console log undefined in strick mode and normal windows object

// function one(){
//     let username = 'vizz'
//     console.log(this.username);
// }
// one()

// same output as above

// const one1 = function (){
//     let username = 'vizz'
//     console.log(this.username);
// }
// one1()


// const one2= () =>{
//     let username = 'vizz'
//     console.log(this.username);
// }
// one2()

//basic arrow function
// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,3));

//implicit return function without curley braces

// const addTwo2 = (num1,num2)=> num1 + num2

// console.log(addTwo2(3,3));

// with parentheses 

// const addTwo3 = (num1,num2)=> (num1 + num2)

// console.log(addTwo3(3,3));


//to return an object using implicit return has to inside parentheses


// const addTwo4 = (num1,num2)=> ({usernamne:'Ahmad'})
// console.log(addTwo4());

