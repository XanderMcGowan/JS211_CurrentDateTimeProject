// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

 

// Write a JavaScript program to convert a number to a string.
  const numberToString = (number) => {

    console.log("I like number " + number.toString())

  }

  numberToString(5)


// Write a JavaScript program to convert a string to the number.
const stringToNumber = (string) => {

  console.log("Three is equal to " + parseInt(string))
}

stringToNumber("5")


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
   const booleanExample = (entry) => {
      data = typeof entry
      console.log(data)
   }

    booleanExample(true)


  // console.log (typeof true)

  // * Null

  const nullExample = (entry) => {
    data = typeof entry
    console.log(data)
 }

  nullExample(null)

  // console.log (typeof null)

  // * Undefined


// Code line 65-70 does not run due to undefined variable errors

//   const undefinedExample = (entry) => {
//     data = typeof entry
//     console.log(data)
//  }

//   undefinedExample(undeclaredVariable)



  console.log (typeof undeclaredVariable)

  // * Number
  const numberExample = (entry) => {
    data = typeof entry
    console.log(data)
 }

  numberExample(7)
  

  // console.log (typeof 7)

  // * NaN

  const nanExample = (entry) => {
    data = typeof entry
    console.log(data)
 }

  nanExample(0/0)
  

  // console.log (typeof 0/0)

  // * String

  const stringExample = (entry) => {
    data = typeof entry
    console.log(data)
 }

  stringExample("I like turtles")

  // console.log (typeof "I like turtles")
  

  
// Write a JavaScript program that adds 2 numbers together.


const addTwoNumbers = (num1, num2) => {
  console.log (num1 + num2)
}

addTwoNumbers(2,3)



// Write a JavaScript program that runs only when 2 things are true.

const twoThingsTrue = (numb1, numb2) => {

  if( numb1 == 1 && numb2 == 3) {
     console.log("true")
     return
  }
  console.log("false")
}

twoThingsTrue(1, 2)



// Write a JavaScript program that runs when 1 of 2 things are true.
const oneThingTrue = (numb1) => {

  if( numb1 == 1) {
    console.log("true")
    return
  }
  console.log("false")
}

oneThingTrue(1, 2)


// Write a JavaScript program that runs when both things are not true.  

const allWrong = (numb1, numb2) => {

  if( numb1 != 1 && numb2 != 2) {
    console.log("true")
    return
  }

  console.log("false")
}

allWrong(3, 17)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
