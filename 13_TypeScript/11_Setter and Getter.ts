class Person {
    private _ssn: number;
    private _fName: string;
    private _lName: string;
    
    // another way to declares properties
    constructor(ssn: number, fName: string, lName: string) {
        this._ssn = ssn;
        this._fName = fName;
        this._lName = lName;
    }

    

    public get getFullName(): string {
        return `${this._fName} ${this._lName}`
    }

    public set setFirstName(fName: string) {
        this._fName = fName;
    }
}




let Ali = new Person(1, "Ali", "ds");

Ali.setFirstName = "Kim"




console.log(Ali.getFullName);