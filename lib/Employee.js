// TODO: Write code to define and export the Employee class

class Employee {
  constructor(_name, _id, _email) {
    this.name = _name
    this.role = 'Employee'
    this.email = _email
    this.id = _id;
  }


  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }

}

module.exports = Employee