const square = function(number) {
  return number * number;
};

// with one parameter, there's no need for for brackets, if there is no parameters at all, we must use '()'
const square2 = number => {
  return number * number;
};

// if the body of function only includes a single line and returns a value, it can be made shorter 
const square3 = number => number * number;

console.log(square3(5));

const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false}
];

// const activeJobs = jobs.filter(function(job){ return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);

// arrow functions don't rebind the this keyword
const person = {
  talk() {
    setTimeout(() => {
      console.log('this', this);
    }, 1000);
  }
};

person.talk();