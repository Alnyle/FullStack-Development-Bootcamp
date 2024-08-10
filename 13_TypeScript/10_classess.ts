
class Person {
    // private ssn: number;
    // private fName: string;
    // private lName: string;
    
    // another way to declares properties
    constructor(protected ssn: number, private fName: string, private lName: string) {
        this.ssn = ssn;
        this.fName = fName;
        this.lName = lName;
    }

    

    public get getFullName(): string {
        return `${this.fName} ${this.lName}`
    }
}




let Ali = new Person(1, "Ali", "ds");



console.log(Ali.getFullName);