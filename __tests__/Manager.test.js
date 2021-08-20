const Manager = require("../lib/Manager");


test('extends the Employee class to a new Manager object and checks for @ in email address', () => {
    const manager = new Manager('camil', 1, 'camil@example.com', 700);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});  