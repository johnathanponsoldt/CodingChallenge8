// Task 1: Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getDetails() {
        return `${this.name} works as a ${this.position} and earns $${this.salary}`;
    }
}

// Task 2: Create a Department Class

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
// Create employees
const Chris = new Employee("Chris", 80000, "Developer", "Engineering");
const Johnny = new Employee("Johnny", 75000, "Designer", "Marketing");
const Ryan = new Manager("Ryan", 120000, "Engineering Manager", "Engineering", 20000);
const Donna = new Manager("Donna", 130000, "Marketing Manager", "Marketing", 25000);
// Add employees to departments
engineering.addEmployee(Chris);
engineering.addEmployee(Johnny);
marketing.addEmployee(Ryan);
marketing.addEmployee(Donna);
// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name} works as a ${this.position}, earns $${this.salary}, and has a bonus of $${this.bonus}`;

    }
}

// Task 4: Handle Bonuses for Managers

class department { constructor(name) {
    this.name = name;
    this.employees = [];
}
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total))
    }
}

// Task 5: Create and Manage Departments and Employees

const devdepartment = new department('Development');
const designdepartment = new department('Design');
// creating two new departments

const devemployee1 = new Employee('Jaxson', 70000, 'Developer', 'Development');
const designemployee2 = new Employee('David', 85000, 'Lead Designer', 'Design');
// creatig new employees

const devmanager = new Manager('Jacob', 99000, 'Lead Developer', 'Development', 10000);
const designManager = new Manager('Kate', 85000, 'Lead Designer', 'Design', 9000);
// create managers
