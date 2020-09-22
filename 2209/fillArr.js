// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

function arr(n) {
    let newArr = []
    for (let i=0; i<n; i++) {
      newArr.push(i)
    }
    console.log(newArr)
}
  
arr(5)

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let squaredNums = []
    for (let i=0; i<numbers.length; i++) {
        squaredNums.push(Math.pow(numbers[i],2))
    }
    console.log(squaredNums.reduce(function(a,b) {
      return a + b
  }, 0))
}

squareSum([1,2,2])