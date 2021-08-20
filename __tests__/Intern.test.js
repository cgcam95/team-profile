const Intern = require('../lib/Intern');

test('extends the Employee class to a new Intern object and checks for @ in email address', () => {
    const intern = new Intern('Cam',3,'cam@example.com','UConn');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});  
