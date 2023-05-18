// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: Chris

// set variable to boiling point
// define arrow function that takes 1 number argument
// ternary operator for higher or lower
// write if condition for equal numbers (do this before ternary)

const boiling = 212

const boilingPoint = (temp) => {
  if(temp === boiling) {
    return `${temp} is at boiling point`
  }
  return(temp > boiling ? `${temp} is above boiling point` : 
    `${temp} is below boiling point`)
}

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

console.log(boilingPoint(temperature1))
console.log(boilingPoint(temperature2))
console.log(boilingPoint(temperature3))


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: Miguel

//Going to create a third variable in order to combine the first two const
// let thirdVariable = 
//Going to use the .concat() method into the first provided variable, in order to combine the second into it
// .concat
//Place the second variable into the argument of .concat()
//Use the .length at the end of the parenthesis to measure the length of the new array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

let thirdVariable = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length

console.log(thirdVariable)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: Jesus
//create a var splitString to convert string to array 
//create var reverseArray to reverse the new array that was created 
//create var joinArray  to convert the new reversed array to a string 
//console log joinArray 

const currentCohort = "Delta 2023"
let reverseString = currentCohort.split("").reverse().join("")
console.log(reverseString)

// const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: Michael

// Pseudo code: create a function named lastIndex. it will two parameters named array and value. the function will use a for loop that will start at the end of the array until the beginning of the array. going one by one. it will compare each index with the value provide. if matches the return will be its index. To be honest i did not understand the question right away until i saw the expected outcomes.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndex = (array, value) => {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] === value) {
      return i
    }
  }
}

console.log(lastIndex(numberOfConnections,givenValue1))
console.log(lastIndex(numberOfConnections,givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: Paul

// 1.) Declare the two variables with the given arrays to each variable with the equal operator.

// 2.) Write a console.log function call with each variable in the agrument. Also add the .sort() to have it in or from lowest to highest.

// 3.) Add the .reverse() built-in method after the .sort() fbuilt-in method to have the array code run in reverse to get desired answer.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


console.log(sanDiegoSummerTemperatures.sort().reverse())