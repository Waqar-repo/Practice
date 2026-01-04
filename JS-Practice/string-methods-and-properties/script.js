const message = 'hello World'
const faltuMessage = '     Hi, I am Ahmad    '
for (let index = 0; index < message.length; index++) {
    const element = message[index];
    console.log(element.toUpperCase().toLowerCase());
    
}
//Methods (Without Argument)
const CapitalMessage = message.toUpperCase()
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLowerCase()
console.log(CapitalMessage , message);
console.log(finalMessage);
console.log(finalMessageLowerCase);


console.log(faltuMessage);
console.log(faltuMessage.trim());
console.log(faltuMessage.trimStart());
console.log(faltuMessage.trimEnd());

// Methods (With Argument)

console.log(finalMessage.includes('Am'));
console.log(finalMessage.indexOf('z'));

const passWord = 'abc'
const userEnter = 'abc'

if(passWord.indexOf(userEnter) == -1){
console.log('wrong password');
}
else{
    console.log('You logged in');
}

const replacedMessage = finalMessage.replace('Hi','Hello')
console.log(replacedMessage , finalMessage);

const replacedMessageAll = finalMessage.replaceAll('a','A')
console.log(replacedMessageAll, finalMessage);

const concatMessage = message.concat(' ',faltuMessage,' ',finalMessage)
console.log(concatMessage);

const lastFourDigit = '6891'
const maskedAccountStart = lastFourDigit.padStart(10,'*')
const maskedAccountEnd = lastFourDigit.padEnd(10,'*')
console.log(maskedAccountStart);
console.log(maskedAccountEnd);

const charAt = finalMessage.charAt(9)
console.log(finalMessage , charAt);

const charCodeAt = finalMessage.charCodeAt(9)
console.log(charCodeAt);

const split = finalMessage.split(' ')
console.log(split);
for (let index = 0; index < split.length; index++) {
    const element = split[index];
    console.log(element);
    
}