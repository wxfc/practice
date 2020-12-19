// function inside of an object is referred to as a method


const person = {
  name: 'Wayne',
  // walk: function() {},
  walk() {},
  talk() {}
};

// use bracket notation when you don't know ahead of time what property or method we're going to access

person.talk();
person.name = '';

const targetMember = 'name';
// person['name'] = 'John'
person[targetMember.value] = 'John';