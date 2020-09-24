// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(n) {
    let squaredArr = []
    let numArr = n
        .toString()
        .split('')
        .map(i => {
            return Number(i)
        })
    numArr.forEach(num => {
        squaredArr.push(num*num)
    })  
    let combinedNum = squaredArr.join('')
    return Number (combinedNum)
}

console.log(squareDigits(9119))
