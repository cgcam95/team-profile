const { TestWatcher } = require("jest");

const Employee = requre("../lib/Employee");

test("creates a new employee object", () => {
    const employee = new Employee ('Camil', 1, 'camil@uconn.edu');

    expect(employee.name).toBe('Camil');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
