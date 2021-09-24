/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

const giveExampleAnswerToExercise = function (exNum, answer) {
    console.log(`An example answer to EXERCISE ${ exNum } is:\n\n${ answer }\n\n`)
}

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
    return l1 * l2
}

giveExampleAnswerToExercise(1, area(2, 3))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function (int1, int2) {
    if (int1 === int2) {
        return (int1 + int2) * 3
    } else {
        return int1 + int2
    }
}

giveExampleAnswerToExercise(2, crazySum(3, 3))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (givenNum) {
    if (givenNum > 19) {
        return (Math.abs(givenNum - 19)) * 3
    } else {
        return Math.abs(givenNum - 19)
    }
}

giveExampleAnswerToExercise(3, crazyDiff(20))

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

const boundary = function (n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}

giveExampleAnswerToExercise(4, boundary(400))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function (acceptedString) {
    if (acceptedString === 'Strive') {
        return acceptedString
    } else {
        return 'Strive ' + acceptedString
    }
}

giveExampleAnswerToExercise(5, strivify('Strive'))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

const check3and7 = function (positiveNum) {
    if (positiveNum <= 0) {
        return `${ positiveNum } isn't a positive number! Try harder, c'mon...`
    } else if (positiveNum > 0 && positiveNum % 3 === 0) {
        return `${ positiveNum } is a multiple of 3!`
    } else if (positiveNum > 0 && positiveNum % 7 === 0) {
        return `${ positiveNum } is a multiple of 7!`
    } else {
        return `It looks like ${ positiveNum } isn't a multiple of either 3 or 7. Try again!`
    }
}

giveExampleAnswerToExercise(6, check3and7(75))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

const reverseString = function (givenString) {
    let splitArray = givenString.split('')
    let reversedArray = splitArray.reverse()
    let result = reversedArray.join('')
    return result
}

giveExampleAnswerToExercise(7, reverseString('a man a plan a canal panama'))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

const upperFirst = function (givenString) {
    let splitString = givenString.toLowerCase().split(' ')
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
    }
    return splitString.join(' ')
}


giveExampleAnswerToExercise(8, upperFirst('marti purull urrea'))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

const cutString = function (originalString) {
    let newString = originalString.slice(1, -1)
    return newString
}

giveExampleAnswerToExercise(9, cutString('thisisit'))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function (n) {
    let arrayOfRandomNumbers = []
    for (let i = 0; i < n; i++) {
        arrayOfRandomNumbers.push(Math.floor(Math.random() * 10))
    }
    return arrayOfRandomNumbers
}

giveExampleAnswerToExercise(10, giveMeRandom(12))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/