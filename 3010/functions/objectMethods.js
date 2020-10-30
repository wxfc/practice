// function displayDetails() {
//   document.write(this.id + "<br/>");
//   document.write(this.name + "<br/>");
// };

// var student1 = {
//   id: 1,
//   name: "Bob",
//   display: displayDetails
// };

// var student2 = {
//   id: 2,
//   name: "John",
//   display: displayDetails
// };

// this.id = 3;
// this.name = "Mary";

// student1.display();
// student2.display();
// displayDetails();


// // call()
// // function displayDetails() {
// //   document.write(this.id + "<br/>");
// //   document.write(this.name + "<br/>");
// // };

// // apply()
// function displayDetails(testscore, testscore2) {
//   document.write(this.id + "<br/>");
//   document.write(this.name + "<br/>");
//   document.write(testscore + "<br/>");
//   document.write(testscore2 + "<br/>");
// };

// var student1 = {
//   id: 1,
//   name: "Bob"
// };

// var student2 = {
//   id: 2,
//   name: "John"
// };

// this.id = 3;
// this.name = "Mary";

// displayDetails.call(student1,10);
// displayDetails.call(student2,20);
// displayDetails.call(this,30);

// displayDetails.apply(student1,[10,20]);
// displayDetails.apply(student2,[20,30]);
// displayDetails.apply(this,[30,15]);



// bind()
function displayDetails(testscore) {
  document.write(this.id + "<br/>");
  document.write(this.name + "<br/>");
  document.write(testscore + "<br/>");
};

var student1 = {
  id: 1,
  name: "Bob"
};

var student2 = {
  id: 2,
  name: "John"
};

this.id = 3;
this.name = "Mary";

var displayForStudent1 = displayDetails.bind(student1);
displayForStudent1(10);

var displayForStudent2 = displayDetails.bind(student2,20);
displayForStudent2();

displayForStudent2.displayDetails = displayForStudent1;

displayForStudent2.displayDetails(40);