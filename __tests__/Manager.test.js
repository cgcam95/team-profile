const Manager = require("../lib/Manager");


test('extends the Employee class to a new Manager object and checks for @ in email address', () => {
    const manager = new Manager('camil', 1, 'camil@example.com', 700);

    expect(manager.employeeName).toBe('Camil');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});  