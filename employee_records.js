var employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
}

Employee.prototype.printEmployeeForm = function() {
    console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status);
}

// Call the printEmployeeForm method for each employee
// Put the generated employees into the employees array using whichever method you prefer.

var emp1 = new Employee('Brandi', 'nanny', '$20/hr');
emp1.status = 'Part Time';
emp1.printEmployeeForm();

var emp2 = new Employee('Bob', 'V School Instructor', '$3,000');
emp2.printEmployeeForm();

var emp3 = new Employee('Tanya', 'Writer', '$100,000');
emp3.printEmployeeForm();

var emp4 = new Employee('Bryan', 'Architect', '$45,000')

employees.push(emp1, emp2, emp3);
console.log(employees);

   