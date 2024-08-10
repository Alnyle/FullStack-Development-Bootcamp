

/* 
    alias:
    a type alias allows you to create a new name for an existing type.
        - Simplifying complex types.
        - Making code more readable.
        - Creating reusable types that can be used in many places in the codebase.
*/
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}

createUser({name: "", email: "", isActive: true})




