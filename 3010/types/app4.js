// objects
var student = {
  "name": "Bob",
  "score": 80
};

var s1 = new Object();
s1.name = "Bob";
s1.score = 80;

document.write(student.name);
document.write(s1.name);

// arrays
var studentNames = ["John", "Bob", "Harry"];

var sn = new Array("John", "Bob", "Harry");

document.write(studentNames[0]);
document.write(sn[0]);

// fucntions
function hello(name) {
  return "Hello" + name;
};

var myFunc = new Function("name","return 'Hello' + name");

// regular expressions
var regEx = /\d+/;

document.write((student instanceof Object) + "<br/>");
document.write((studentNames instanceof Array) + "<br/>");
document.write((hello instanceof Function) + "<br/>");
document.write((hello instanceof Object) + "<br/>");
document.write((studentNames instanceof Object) + "<br/>");
document.write((hello instanceof Array) + "<br/>");



