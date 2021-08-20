const Engineer = require('../lib/Engineer.js');

test('checks to see if parents properties were inherited', () => {
    const engineer = new Engineer("Camil", 1, "camil@uconn.edu", 'github');

    expect(engineer.Name).toStrictEqual(expect.any(String));
    expect(engineer.id).toStrictEqual(expect.any(Number));
    expect(engineer.email).toStrictEqual(expect.any(Number));
    expect(engineer.github).toEqual(expect.any(String));
});  