// var -> function
// let -> block
// const -> block

// get rid of 'var' and prefer to use const over let; use let only when you need to reassign a variable

function sayHello() {
  for (let i=0; i<5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello();

// won't allow to happen
const x =1;
x = 2;