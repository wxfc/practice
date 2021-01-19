// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// function solve(arr, arr2) {
//   let strAppears = [];
//   let count = 0;
//   arr2.forEach(str => {
//     arr.forEach(el => {
//       if (str === el) {
//         count++;
//       }
//     })
//     strAppears.push(count);
//     count = 0;
//   })
//   return strAppears;
// };

const solve = (arr, arr2) => arr2.map(el => arr.filter(val => val === el).length);

console.log(solve(['abc', 'abc', 'xyz', 'cde', 'uvw'], ['abc', 'cde', 'uap']));
console.log(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']));
console.log(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']));
