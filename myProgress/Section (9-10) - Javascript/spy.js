document.addEventListener('DOMContentLoaded', (event) => {
	let fname = prompt("What is your first name?")
	let lname = prompt("What is your last name?")
	let age = prompt("What is your age?")
	let pname = prompt("What is your pet's name?")

	count_checks = 0
	if (fname[0] == lname[0]) {
		count_checks++
	}
	if (20 < age < 30) {
		count_checks++
	}
	if (pname[pname.length - 1] == 'y'){
		count_checks++
	}
	if (count_checks == 3) {
		console.log("All checks cleared. Welcome to MIB Branch XXX-XXX")
	}

})