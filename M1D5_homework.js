// /*
// ASSIGNMENT RULES
// - All the answers must be written in JavaScript
// - You can ask for help, reach the Teaching Assistants if needed
// - You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
// - You can test your code in a separate file or de-commenting the single exercises in this one.
// - You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
// - The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
// */

// const giveExampleAnswerToExercise = function (exNum, answer) {
//     console.log(`An example answer to EXERCISE ${ exNum } is:\n\n${ answer }\n\n`)
// }

// /* EXERCISE 1
//  Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
// */

// const area = function (l1, l2) {
//     return l1 * l2
// }

// giveExampleAnswerToExercise(1, area(2, 3))

// /* EXERCISE 2
//  Write a function called "crazySum" which receives two integers as parameters.
//  It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
// */

// const crazySum = function (int1, int2) {
//     if (int1 === int2) {
//         return (int1 + int2) * 3
//     } else {
//         return int1 + int2
//     }
// }

// giveExampleAnswerToExercise(2, crazySum(3, 3))

// /* EXERCISE 3
//  Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
//  It should return triple their absolute difference if the given number is greater than 19.
// */

// const crazyDiff = function (givenNum) {
//     if (givenNum > 19) {
//         return (Math.abs(givenNum - 19)) * 3
//     } else {
//         return Math.abs(givenNum - 19)
//     }
// }

// giveExampleAnswerToExercise(3, crazyDiff(20))

// /* EXERCISE 4
//  Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
// */

// const boundary = function (n) {
//     if ((n >= 20 && n <= 100) || n === 400) {
//         return true
//     } else {
//         return false
//     }
// }

// giveExampleAnswerToExercise(4, boundary(400))

// /* EXERCISE 5
//  Write a function called "strivify" which accepts a string as a parameter.
//  It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
// */

// const strivify = function (acceptedString) {
//     if (acceptedString.startsWith('Strive')) {
//         return acceptedString
//     } else {
//         return 'Strive ' + acceptedString
//     }
// }

// giveExampleAnswerToExercise(5, strivify('I love you'))

// /* EXERCISE 6
//  Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
//  HINT: Modulus Operator
// */

// const check3and7 = function (positiveNum) {
//     if (positiveNum <= 0) {
//         return `${ positiveNum } isn't a positive number! Try harder, c'mon...`
//     } else if (positiveNum > 0 && positiveNum % 3 === 0) {
//         return `${ positiveNum } is a multiple of 3!`
//     } else if (positiveNum > 0 && positiveNum % 7 === 0) {
//         return `${ positiveNum } is a multiple of 7!`
//     } else {
//         return `It looks like ${ positiveNum } isn't a multiple of either 3 or 7. Try again!`
//     }
// }

// giveExampleAnswerToExercise(6, check3and7(75))

// /* EXERCISE 7
//  Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
// */

// const reverseString = function (givenString) {
//     let splitArray = givenString.split('')
//     let reversedArray = splitArray.reverse()
//     let result = reversedArray.join('')
//     return result
// }

// giveExampleAnswerToExercise(7, reverseString('a man a plan a canal panama'))

// //better way:

// const reverseStringPro = function (givenString) {
//     return givenString.split('').reverse().join('')
// }

// giveExampleAnswerToExercise(7, reverseString('a better solution in one line!'))

// /* EXERCISE 8
//  Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
// */

// const upperFirst = function (givenString) {
//     let splitString = givenString.toLowerCase().split(' ')
//     for (let i = 0; i < splitString.length; i++) {
//         splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
//     }
//     return splitString.join(' ')
// }

// giveExampleAnswerToExercise(8, upperFirst('marti purull urrea'))

// /* EXERCISE 9
//  Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
// */

// const cutString = function (originalString) {
//     let newString = originalString.slice(1, -1)
//     return newString
// }

// giveExampleAnswerToExercise(9, cutString('thisisit'))

// /* EXERCISE 10
//  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
// */

// const giveMeRandom = function (n) {
//     let arrayOfRandomNumbers = []
//     for (let i = 0; i < n; i++) {
//         arrayOfRandomNumbers.push(Math.floor(Math.random() * 10))
//     }
//     return arrayOfRandomNumbers
// }

// giveExampleAnswerToExercise(10, giveMeRandom(12))

// /* WHEN YOU ARE FINISHED
//  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
// */

// /*----------------------------------------------------------- EXTRA EXERCISES -----------------------------------------------------------*/

// // Additional assignments for Day 5

// /* EXTRA 1
//  Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
//  The function should return the sum of just the numbers bigger than 5.
// */

// const checkArray = function (receivedArray) {
//     let biggerThanFiveSum = 0
//     for (let i = 0; i < receivedArray.length; i++) {
//         if (receivedArray[i] > 5) {
//             console.log(`${ receivedArray[i] } is bigger than 5.`)
//             biggerThanFiveSum += receivedArray[i]
//         } else {
//             console.log(`${ receivedArray[i] } isn't higher than 5.`)
//         }
//     }
//     console.log(`The sum of elements higher than 5 is: ${ biggerThanFiveSum }`)
// }

// checkArray(giveMeRandom(4))

// /* EXTRA 2
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "shoppingCartTotal" which calculates the total due to the shop.
// */

// let shoppingCart = [
//     tennisRacket = {
//         price: 59.99,
//         name: 'Ultra Max Pro Rocket Racket',
//         SKU: 'RKT654',
//         qty: 5
//     },
//     tennisBalls = {
//         price: 9.99,
//         name: 'Ultra Max Pro Ballsy Balls',
//         SKU: 'BBS468',
//         qty: 10
//     },
//     hairBand = {
//         price: 19.99,
//         name: 'Ultra Max Pro Holy Hair Band',
//         SKU: 'HHB151',
//         qty: 1
//     }
// ]

// const shoppingCartTotal = function ([...inCartItems]) {
//     let totalDue = 0
//     for (item of inCartItems) {
//         totalDue += (item.price * item.qty)
//     }
//     console.log(`Total due to shop: €${ totalDue }.`)
// }

// shoppingCartTotal([tennisBalls, tennisRacket])

// /* EXTRA 3
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
// */

// let tennisNet = {
//     price: 129.99,
//     name: 'Over-The-Net Pro Net',
//     SKU: 'OPN989',
//     qty: 1
// }

// const addToShoppingCart = function (newItem) {
//     shoppingCart.push(newItem)
//     console.log(`You have ${ shoppingCart.length } items in your cart.`)
// }

// addToShoppingCart(tennisNet)

// /* EXTRA 4
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
// */

// const maxShoppingCart = function (shoppingCart) {
//     let itemPrices = []
//     for (let i = 0; i < shoppingCart.length; i++) {
//         itemPrices.push(shoppingCart[i].price)
//     }
//     let mostExpensiveItem = Math.max(...itemPrices)
//     console.log(`The most expensive item in the cart is €${ mostExpensiveItem }.`)
// }

// maxShoppingCart(shoppingCart)

// //a better approach

// const maxShoppingCartPro = function (shoppingCart) {
//     let mostExpensiveItem = shoppingCart[0]
//     for (let i = 0; i < shoppingCart.length; i++) {
//         if (shoppingCart[i].price > mostExpensiveItem.price) {
//             mostExpensiveItem = shoppingCart[i]
//         }
//     }
//     console.log(`${ mostExpensiveItem.name } is the most expensive item in the cart. It costs ${ mostExpensiveItem.price }.`)
// }

// maxShoppingCartPro(shoppingCart)

// /* EXTRA 5
//  In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
//  Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
// */

// const latestShoppingCart = function (shoppingCart) {
//     let latestItem = shoppingCart[shoppingCart.length - 1]
//     console.log(`The latest item in the cart is ${ latestItem.name }.`)
// }

// latestShoppingCart(shoppingCart)

// /* EXTRA 6
//  Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
//  The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
// */

// const loopUntil = function (x) {
//     if (x > 0 && x < 10) {
//         let counter = 0
//         while (counter !== 3) {
//             let randomNumber = Math.floor(Math.random() * 10)
//             if (randomNumber > x) {
//                 counter++
//             } else {
//                 counter = 0
//             }
//             console.log(randomNumber)
//         }
//     } else {
//         console.log('The integer provided must be between 1 and 9!')
//     }
// }

// loopUntil(2)

// /* EXTRA 7
//  Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
// */

// let randomArrayOfNumbers = [3, 2, 9, 10, 'fudge', 44, '2', 1]

// const average = function (receivedArray) {
//     let receivedArraySum = 0
//     let numberOfIntegersInArray = 0
//     for (let i = 0; i < receivedArray.length; i++) {
//         if (Number.isInteger(receivedArray[i])) {
//             receivedArraySum += receivedArray[i]
//             numberOfIntegersInArray++
//         }
//     }
//     console.log(`The average value of the integers in the array is: ${ receivedArraySum / numberOfIntegersInArray }`)
// }

// average(randomArrayOfNumbers)

// /* EXTRA 8
//  Write a function called "longest" to find the longest string from a given array of strings.
// */

// let givenArrayOfStrings = ["Let me in!", "I am determined to become the longest string in this array and I will stop at nothing until I am", "I don't know about that", "C'mon, it's not my fault I lost my keys!"]

// const longest = function (providedArrayOfStrings) {
//     let longestStringWithinArray = providedArrayOfStrings[0]
//     for (let i = 0; i < providedArrayOfStrings.length; i++) {
//         if (providedArrayOfStrings[i].length > longestStringWithinArray.length) {
//             longestStringWithinArray = providedArrayOfStrings[i]
//         }
//     }
//     console.log(`"${ longestStringWithinArray }" is the longest string with ${ longestStringWithinArray.length } characters!`)
// }

// longest(givenArrayOfStrings)

// /* EXTRA 9
//  Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
//  The function should return true if the emailContent string does not contain the words SPAM or SCAM.
// */

// const detectSpam = function (emailContent) {
//     let flagWords = ['SPAM', 'SCAM', 'Spam', 'Scam', 'spam', 'scam']
//     let isEmailSafe = true
//     for (let i = 0; i < emailContent.length; i++) {
//         if (emailContent.includes(flagWords[i])) {
//             isEmailSafe = false
//         }
//     }
//     if (isEmailSafe === true) {
//         console.log('Email is safe to open.')
//     } else {
//         console.log('WARNING! Email could contain spam!')
//     }
// }

// detectSpam('This is a safe email with no malice in it whatsoever. scam!')

// /* EXTRA 10
//  Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
// */

// const calculateDaysPassed = function (givenDate) {
//     let receivedDate = new Date(givenDate).getTime()
//     let todaysDate = Date.now()
//     let timePassed = todaysDate - receivedDate
//     let numberOfDaysSince = Math.floor(timePassed / (1000 * 60 * 60 * 24))
//     console.log(`It's been ${ numberOfDaysSince } days since the given date.`)
// }

// calculateDaysPassed('September 20, 2021 22:00:00 GMT+2:00')

// /* EXTRA 11
//  Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
//  The result should be a matrix of x times y with, as value, the index of the position.
//  Ex.: x = 3, y = 2
//  ["00","01","02"
//  "10","11","12"]
// */

// const matrixGenerator = function (x, y) {
//     let matrix = []
//     for (let i = 0; i < y; i++) {
//         for (let j = 0; j < x; j++) {
//             matrix.push(i.toString() + j.toString())
//         }
//     }
//     console.log(matrix)
//     let charsPerRow = matrix.length / y
//     console.log(charsPerRow)
//     for (let k = 0; k < y; k++) {
//         console.log(matrix.slice(k * charsPerRow, (k + 1) * charsPerRow))
//     }
// }

// matrixGenerator(3, 2)

// /* WHEN YOU ARE FINISHED
//  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
// */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I am the response, baby!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${ hostname }:${ port }/`);
});