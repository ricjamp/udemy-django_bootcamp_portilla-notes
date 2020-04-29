function add() {
  alert('Adding a new student');
  const newName = prompt('What is the student\'s name?');
  students.push(newName);
}

function remove() {
  alert('Removing a student');
  if (students.length == 0) {
    console.log('No students logged');
  } else {
    const removeName = prompt('What is the student\'s name?');
    const idx = students.indexOf(removeName);
    if (idx != -1) {
      students.splice(idx, 1);
    } else {
      console.log('No such student');
    }
  }
}

function display() {
  alert('Check your console for the list of students');
  if (students.length == 0) {
    console.log('No students logged');
  } else {
    students.forEach((item) => console.log(item));
  }
}

// Initial variables
let option = '';
const students = [];

while (option != 'quit') {
  option = prompt('Choose: (1) add, (2) remove, (3) display, (4) quit');
  option = option.toLowerCase();

  switch (option) {
    case 'add':
      add();
      break;
    case 'remove':
      remove();
      break;
    case 'display':
      display();
      break;
  }
}
