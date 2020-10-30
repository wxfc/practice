
function maxSequence(arr) {
    let num1 = 0
    let num2 = 0
    arr.forEach(i => {
      num1 = Math.max(i, num1 + i)
      num2 = Math.max(num2, num1)
    })
    return num2
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))