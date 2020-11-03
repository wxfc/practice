var course1 = {
  name: "JavaScript fundamentals" // put
};

var course2 = new Object();
course2.name = "ReactJS"; // put

course1.name = "End to End Java Project"; // set

course1.description = "Master Java Project Development"; // put

            // checking if property name is in object
console.log("name" in course1); 
console.log("name1" in course1);
// delete  course1.description;

// console.log("description" in course1); // returns false due to being deleted

console.log("toString" in course1); // every property gets it inherited from the parent object 
console.log(course1.hasOwnProperty("toString")); //specifically check if a property is own by a particular object & it is not getting it from another object or shared space

for(var eachProperty in course1) {
  console.log(eachProperty); // returns name of each property
  console.log(course1[eachProperty]); // returns the value of the property
};

var allProperties = Object.keys(course1);
for(var i=0; i<allProperties.length; i++) {
  console.log(allProperties[i]); // returns name of each property
  console.log(course1[allProperties[i]]); // return value of each property
};

console.log(course1.propertyIsEnumerable("name")); // every object gets this from the parent object
// by default it is true

console.log(allProperties.propertyIsEnumerable("length")); // returns false