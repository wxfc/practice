// Given an integral number, determine if it's a square number

// Math.sqrt() returns the square root of the given number

function isSquare(n) {
    if (Math.sqrt(n) % 1 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isSquare(-1))
console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(4))
console.log(isSquare(25))
