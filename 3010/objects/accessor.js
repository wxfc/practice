var creditCard = {
  _name: "John",

  get name(){
    return this._name
  },

  set name(value) {
    this._name = value;
  }
};

console.log(creditCard.name);

creditCard.name = "Bob";
console.log(creditCard.name);