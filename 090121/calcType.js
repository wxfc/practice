// function calcType(a, b, res) {
  // if ((a + b) === res) {
  //   return "addition";
  // } else if ((a - b) === res) {
  //   return "subtraction";
  // } else if ((a * b) === res) {
  //   return "multiplication";
  // } else if ((a / b) === res) {
  //   return "division"
  // } else {
  //   return null
  // };
// };

const calcType = (a,b,res) =>
  a + b === res ? 'addition' :
  a - b === res ? 'subtraction' :
  a * b === res ? 'multiplication' :
  a / b === res ? 'division' : 
  null;

console.log(calcType(1,2,3));
console.log(calcType(10,4,40));
console.log(calcType(10,5,5));
console.log(calcType(9,5,1.8));


