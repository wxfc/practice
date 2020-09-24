// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(n) {
    let numberArray = []
    for (let i=1; i<=n; i++) {
        numberArray.push(i)
    }
    let total = numberArray.reduce(function(a,b) {
        return a + b
    }, 0)
    return total
}

console.log(summation(8))