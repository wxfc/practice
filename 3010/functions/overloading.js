function add(num1,num2,num3) {
  return num1 + num2 + num3;
};

function add(num1,num2) {
  document.write(arguments.length);
  if (arguments.length == 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else {
    return arguments[0] + arguments[1];
  }
};

document.write(add(2,3));

// overloading will always use the last one