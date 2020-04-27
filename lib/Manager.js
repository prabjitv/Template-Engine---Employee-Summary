// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(_name, _id, _email, _officeNumber) {
    super(_name, _id, _email);
    this.officeNumber = _officeNumber;
    this.role = 'Manager'
  };

  getRole() {
    return this.role;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
};




module.exports = Manager
