const person = {
    firstName: 'Mosh',
    secondName: 'Ali',
    get fullName() {
        return `${person.firstName} ${person.secondName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') {
            throw new Error('Value is not a string or null');
        }

            const parts = value.split(' ');
            if (parts.length !== 2) {
                throw new Error('Enter First and Last Name.')
            }
            this.firstName = parts[0];
            this.secondName = parts[1];
        
    }
};

try {
    person.fullName = '';
    console.log(person.fullName)
} catch (e) {
    console.log(e);
}

