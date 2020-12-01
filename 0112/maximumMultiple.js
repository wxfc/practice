// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound){
  var n = bound;
  for (i = n; n % divisor !== 0; i--){
    n--
  }
  return n
}

console.log(maxMultiple(2,7))
console.log(maxMultiple(10,50))
console.log(maxMultiple(37,200))
