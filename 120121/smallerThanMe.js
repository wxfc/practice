// Write
// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
// For example:
// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

function smaller(arr) {
  const smallerArr = [];
  let count = 0;
  let count2 = 0;
  for (let i=0; i<arr.length; i++) {
    count2++;
    for (let j=count2; j<arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    smallerArr.push(count);
    count = 0;
  }
  return smallerArr;
};

// const smaller = arr => arr.map((x, i) => arr.slice(i).filter(y => x > y).length);

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 3]));
console.log(smaller([1, 2, 0]));
console.log(smaller([1, 2, 1]));
console.log(smaller([1, 1, -1, 0, 0]));
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));





