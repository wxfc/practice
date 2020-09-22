// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript. Do some Googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num,num2) {
    if(num > num2) {
        return num
    } else if (num === num2) {
        return 0
    } else {
        return num2
    }
}

console.log(maxOfTwoNumbers(34,56))
console.log(maxOfTwoNumbers(22,13))
console.log(maxOfTwoNumbers(4,17))
console.log(maxOfTwoNumbers(28,28))

// Return the number of occurrences of vowels in a word. Vowels are a, e, i, o, u, and y

function countVowels(word) {
    let count = 0
    let wordArr = word.split('')
    for (let i=0; i<wordArr.length; i++) {
        if (wordArr[i] === 'a' || wordArr[i] == 'e' || wordArr[i] == 'i' ||            wordArr[i] == 'o' || wordArr[i] == 'u') {
            count++
        }
    }
    
    return count
}

console.log(countVowels("stealing"))
