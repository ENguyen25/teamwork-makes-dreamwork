const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Employee('Evelyn', '1234', 'enguyen6208@gmail.com');

      expect(newEmployee.name).toEqual('Evelyn');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('enguyen6208@gmail.com');
    });
  });

  describe("getName", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Evelyn', '1234', 'enguyen6208@gmail.com');

      expect(newEmployee.getName()).toEqual('Evelyn');
    });
  });

  describe("getID", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Evelyn', '1234', 'enguyen6208@gmail.com');

      expect(newEmployee.getID()).toEqual('1234');
    });
  });

  describe("getEmail", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Evelyn', '1234', 'enguyen6208@gmail.com');

      expect(newEmployee.getEmail()).toEqual('enguyen6208@gmail.com');
    });
  });

  describe("getRole", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Employee('Evelyn', '1234', 'enguyen6208@gmail.com');

      expect(newEmployee.getRole()).toEqual('Employee');
    });
  });
});