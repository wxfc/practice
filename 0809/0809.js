// # Which number's bigger?
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(`the greater number of ${num1} and ${num2} is ${num1}`)
    } else if (num1 === num2) {
        console.log('both numbers are the same')
    } else {
        console.log(`the greater number of ${num1} and ${num2} is ${num2}`)
    }
}

greaterNum(5,10)
greaterNum(300,160)
greaterNum(50,50)

// # The Age Calculator
// Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 17 or 18"
// - Call the function three times with different sets of values.

function calculateAge(birth, current) {
    let age = current - birth
    console.log(`You are either ${age} or ${age - 1}`)
}

calculateAge(1990, 2020)
calculateAge(1984, 2020)
calculateAge(2003, 2020)


// # The World Translator
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode) {
    if (langCode === 'es') {
        console.log('Hola Mundo')
    } else if (langCode === 'de') {
        console.log('Hallo Welt')
    } else if (langCode === 'en') {
        console.log('Hello World')
    } else {
        console.log('Please enter "es", "de" or "en"')
    }
}

helloWorld('de')
helloWorld('en')
helloWorld('es')
helloWorld('mk')

// # The Grade Assigner
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score) {
    if (score >= 50) {
        console.log("A")
    } else if (score < 50 && score >= 40) {
        console.log("B")
    } else if (score < 30 && score >= 20) {
        console.log("C")
    } else if (score < 20 && score >=10) {
        console.log("D")
    } else if (score < 10) {
        console.log("F")
    }
}

assignGrade(40)
assignGrade(55)
assignGrade(32)
assignGrade(27)
assignGrade(16)
assignGrade(3)

// # The Pluralizer
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, num) {
    if (num === 1) {
        console.log(`${num} ${noun}`)
    } else {
        console.log(`${num} ${noun}s`)
    }
}

pluralize('cat', 3)
pluralize('dog', 5)
pluralize('bird', 1)