const arr = [1,2,3,4,5,6,7];

const newArr = arr.filter(a => a % 2 === 0);
const newArr2 = arr.map(a => a % 2 === 0);
const newArr3 = arr.map(a => a*a);
const newArr4 = arr
  .filter(a => a % 2 === 0)
  .map(a => a*a)
  .reduce((a,b) => a + b);
 
// console.log(newArr2);
// console.log(newArr3);
// console.log(newArr4);

const numbers = [1,2,4,8];

const sum = numbers.reduce((num1,num2) => {
  // console.log(num1,num2);
  return num1 + num2;
});

// console.log(sum);

const orders = [
  {
    userId: 1,
    amount: 10
  },
  {
    userId: 1,
    amount: 15
  },
  {
    userId: 2,
    amount: 5
  },
  {
    userId: 2,
    amount: 100
  }
];

const a = orders
  .filter(order => order.userId === 1)
  .map(order => order.amount)
  .reduce((a,b) => a + b);

console.log(a);
