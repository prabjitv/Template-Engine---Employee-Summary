// TODO: Write code to define and export the Employee class

class Employee {
  constructor(_name, _role, _email, _id) {
    if (!_name) {
      throw new Error("You are missing the name.");
    }
    if (!_role) {
      throw new Error("You are missing the role.");
    }
    if (!_email) {
      throw new Error("You are missing the email.");
    }
    if (!_id) {
      throw new Error("You are missing the id.");
    }

    this.name = _name;
    this.role = _role;
    this.email = _email;
    this.id = _id;

    printinfo()
  }

  const employee = new Employee(John);
  employee.printInfo();

  getName()
  getId()
  getEmail()
  getRole()

  // Returns 'Employee'
}