// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    let textLowerCase = text.toLowerCase()
    let counter = {}
    for (let i=0; i<textLowerCase.length; i++) {
        let char = textLowerCase.charAt(i)
        if (counter[char]) {
            counter[char]++
        } else {
            counter[char] = 1;
        }
    }
    let arr = Object.entries(counter)
    let duplicates = []
    for (let j=0; j<arr.length; j++) {
        let count = arr[j][1]
        if (count > 1) {
            duplicates.push(arr[j])
        }
    }

    // I added the string component

    let str = ""
    for (let k=0; k<duplicates.length; k++) {
        if (duplicates[k][1] === 2) {
            str += "'" + duplicates[k][0] + "' occurs twice "
        } else {
            str += "'" + duplicates[k][0] + "' occurs " + duplicates[k][1] + " times "
        }
    }
    return str   
}

console.log(duplicateCount("aabbbcdde"))
console.log(duplicateCount("aA11"))
