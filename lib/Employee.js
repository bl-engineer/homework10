
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returns name
    getName ()  {
        return this.name;
    }

    // return ID
    getId () {
        return this.id;
    }   

    // returns email
    getEmail () {
        return this.email;
    }

    // returns employee
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 