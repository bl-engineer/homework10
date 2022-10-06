const Employee = require('../lib/Employee');

// creates employee object 
test('creates Employee', () => {
    const employee = new Employee('bl', 1984, 'bocfri@yahoo.fr');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee('bl', 1990, 'bocfri@yahoo.fr');
    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee id', () => {
    const employee = new Employee('bl', 1990, 'bocfri@yahoo.fr');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('bl', 1990, 'bocfri@yahoo.fr');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets employee role', () => {
    const employee = new Employee('bl', 1990, 'bocfri@yahoo.fr');
    expect(employee.getRole()).toEqual("Employee");
}); 