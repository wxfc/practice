function product() {
  var result = 1;
  for (var i=0; i<arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
};

document.write(product(3,4,5));
document.write(product(9,8));
document.write(product(10));
document.write(product());
