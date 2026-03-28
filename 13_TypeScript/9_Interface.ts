
interface User {
    readonly _dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startWork(): string
    startTrial: () => string
    getCoupon(coupon: string): number
}

// reopening interface: modify interface
interface User {
    githubToken: string 
}

// interface force you to implement the functions
const ahmed: User = {_dbId: 2, email: "Ahmed@gmail.com", userId: 322,
    startTrial: () => {
        return "Trail Start"
    },
    getCoupon: (name: "Ahmed") => {
        return 10;
    },
    githubToken: "String"
}

// interface and extends another interace
interface Admin extends User {
    role: "Admin" | "ta" | "learner"
}

const Ali: Admin = {_dbId: 2, email: "ali@gmail.com", userId: 322,
    startTrial: () => {
        return "Trail Start"
    },
    getCoupon: (name: "Ahmed") => {
        return 10;
    },
    githubToken: "String",
    role: "ta"
}