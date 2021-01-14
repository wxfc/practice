// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

const sumOfMinimums = arr => arr.map(el => Math.min(...el)).reduce((a,b) => a + b, 0);

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));
