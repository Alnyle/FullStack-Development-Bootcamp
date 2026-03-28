

// abstract class: is used tio define common behavior for derived classes to extend
//                 - can't define or create new object from abstract class
//                 - abstract method always implement in derived class
//                 - 
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {}
    abstract getSalary(): number;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
      }
}


class FullTimeEmployee extends Employee {

    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary;
    }
}

const e = new FullTimeEmployee("kim", "ONG", 21);

console.log(e.compensationStatement);