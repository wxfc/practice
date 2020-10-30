var obj1 = new Object();
var obj2 = obj1;

obj1.myProperty = "All the power is within you";

document.write(obj2.myProperty);

// garbage collection
obj1 = null;
obj2 = null;

// in-built object types
var products = new Array();
var date = new Date();
var error = new Error("Something went wrong");
var myFunc = new Function("document.write('Hello')");
var regEx = new RegExp("\\d+");
