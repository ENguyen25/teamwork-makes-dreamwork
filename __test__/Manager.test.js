const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Manager('Evelyn', '1234', 'enguyen6208@gmail.com', '5678');

      expect(newEmployee.name).toEqual('Evelyn');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('enguyen6208@gmail.com');
      expect(newEmployee.officeNumber).toEqual('5678');
    });
  });

  describe("getRole", () => {
    it("should return the name passed into the constructor", () => {
      const newEmployee = new Manager('Evelyn', '1234', 'enguyen6208@gmail.com', '5678');

      expect(newEmployee.getRole()).toEqual('Manager');
    });
  });
});