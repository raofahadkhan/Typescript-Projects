class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}

class Student extends Person {
	rollNumber: string;
	courses: Course[] = [];

	constructor(name: string, age: number, rollNumber: string) {
		super(name, age);
		this.rollNumber = rollNumber;
	}

	registerForCourses(course: Course) {
		this.courses.push(course);
	}
}

class Instructor extends Person {
	private salary: number;
	courses: Course[] = []; 

	constructor(name: string, age: number, salary: number) {
		super(name, age);
		this.salary = salary;
	}

	assignCourse(course: Course) {
		this.courses.push(course);
	}
}

class Course {
	id: string;
	name: string;
	students: Student[] = [];
	instructor!: Instructor;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}

	addStudent(student: Student) {
		this.students.push(student);
		student.registerForCourses(this);
	}

	setInstructor(instructor: Instructor) {
		this.instructor = instructor;
		instructor.assignCourse(this);
	}
}

class Department {
	name: string;
	courses: Course[] = [];

	constructor(name: string) {
		this.name = name;
	}

	addCourse(course: Course) {
		this.courses.push(course);
	}
}

const course1 = new Course("course1", "Metaverse");
const course2 = new Course("course2", "Blockchain");

const department1 = new Department("Computer Science")
department1.addCourse(course1)
department1.addCourse(course2)

const student1 = new Student("Fahad", 23, "025793");
const student2 = new Student("Asim", 20, "12345");

const instructor1 = new Instructor("Nasir Hussain", 35, 100000);
const instructor2 = new Instructor("Qasim Ferozpurwala", 45, 100000);

course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
course1.setInstructor(instructor2);

console.log(student1);
console.log(student1.courses);
