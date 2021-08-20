const Intern = require('../lib/Intern');

test('extends the Employee class to a new Intern object and checks for @ in email address', () => {
    const intern = new Intern('Cam',3,'cam@example.com','UConn');

    expect(intern.Name).toBe('Camil');
    expect(intern.id).toBe(expect.any(Number));
    expect(intern.email).toBe(expect.any(String));
    expect(intern.school).toBe(expect.any(String));
});  
