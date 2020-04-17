// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(_name, _role, _email, _id);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const engineer = new Engineer(12, 9);
engineer.printInfo();

getName()
getId()
getEmail()
getRole()



* github  // GitHub username

* getGithub()

* getRole() // Overridden to return 'Engineer'