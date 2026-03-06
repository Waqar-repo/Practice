//for

for (let i = 0; i <= [...Array(10)].length; i++) {
  const element = i;
  if(element === 5){
    // console.log(`${element} is best number`)
  }
  // console.log(element)
  
}

for (let i = 1; i <= 10 ; i++) {
  // console.log(`OuterLoop value ${i}`)
  for (let j = 1; j <= 10; j++) {
  //  console.log(`Inner Loop value ${j} and Outer Loop value ${i}`)    

  // console.log(i + ' * ' + j + ' = ' + i*j)
  }
  
}

const myArray = ['flash','batman','superman']

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element)
  
}

//break and continue

for (let i = 1; i <= 20 ; i++) {
  if(i== 5){
    // console.log(`Detected 5`)
    break
  }
  // console.log(`value of i is ${i}`)
  
}

for (let i = 1; i <= 20 ; i++) {
  if(i == 5){
    console.log(`Detected 5`)
    continue
  }
  console.log(`value of i is ${i}`)
  
}