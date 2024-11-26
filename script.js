//complete this code
class Person {
	constructor(name , age) {
		this._name = name;
		this._age = age;
	}
	// Getter for the name
	get name() {
		return this._name
	}

	// Setter for tbe name
	set age(age) {
		if(typeof age === "number" && age > 0) {
			this._age = age;
		} else {
			console.log("Please provide a valid age")
		}
	}

	// get name

	get age() {
		return this._age
	}
}

class Student extends Person {

	study() {
		console.log(`${this.name} is studing`)
	}
	
}

class Teacher extends Person {

	teach() {
		console.log(`${this.name} is teaching`)
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
