// function hoisting
// document.write(evenOrOdd(10)); 

// declaration
function evenOrOdd(num) {
  document.write(arguments[1] + "<br/>");
  document.write(arguments.length + "<br/>");
  document.write(evenOrOdd.length + "<br/>"); 
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

var e = evenOrOdd;

document.write(e(10,20,30,40));


// expression
var evenOrOdd2 = function(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

document.write(evenOrOdd2(5));

// function hoisting does not work for expressions