// Part 6 - Objects Exercise

// //////////////////
// PROBLEM 1 //////
// ////////////////

// // Given the object:
// let employee = {
//   name: 'John Smith',
//   job: 'Programmer',
//   age: 31,
//   nameLength: function() {
//     console.log(this.name.length);
//   },
// };

// // Add a method called nameLength that prints out the
// // length of the employees name to the console.
// employee.nameLength();

// ///////////////////
// // PROBLEM 2 /////
// /////////////////

// // Given the object:
// const employee = {
//   name: 'John Smith',
//   job: 'Programmer',
//   age: 31,
// };

// // Write a program that will create an Alert in the browser of each of the
// // object's values for the key value pairs. For example, it should alert:

// // Name is John Smith, Job is Programmer, Age is 31.
// keys = Object.keys(employee);
// len = keys.length;
// for (i = 0; i < len; i++) {
//   alert(`${keys[i]} : ${employee[keys[i]]}`);
// }


// /////////////////
// PROBLEM 3 /////
// ///////////////

// Given the object:
const employee = {
  name: 'John Smith',
  lastName: function() {
    str = this.name;
    namesArr = str.split(' ');
    console.log(namesArr[namesArr.length - 1]);
  },
  job: 'Programmer',
  age: 31,
};

employee.lastName();
// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
