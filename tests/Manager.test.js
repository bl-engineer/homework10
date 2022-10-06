// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates Manager', () => {
    const manager = new Manager('bl', 1990, 'bocfri@yahoo.fr', 123);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets manager role', () => {
    const manager = new Manager('bl', 1990, 'bocfri@yahoo.fr');
    expect(manager.getRole()).toEqual("Manager");
}); 