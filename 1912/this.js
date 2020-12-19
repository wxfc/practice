const person = {
  name: 'Wayne',
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk.bind(person);
// console.log(walk);
walk();