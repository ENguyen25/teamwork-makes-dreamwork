const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("initiation", () => {
    it("should have properties matching argument values", () => {
      const newEmployee = new Intern('Evelyn', '1234', 'enguyen6208@gmail.com', 'UC Davis');

      expect(newEmployee.name).toEqual('Evelyn');
      expect(newEmployee.id).toEqual('1234');
      expect(newEmployee.email).toEqual('enguyen6208@gmail.com');
      expect(newEmployee.school).toEqual('UC Davis');
    });
  });

  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const newEmployee = new Intern('Evelyn', '1234', 'enguyen6208@gmail.com', 'UC Davis');

      expect(newEmployee.getSchool()).toEqual('UC Davis');
    });
  });

  describe("getRole", () => {
    it("should return the role of the employee", () => {
      const newEmployee = new Intern('Evelyn', '1234', 'enguyen6208@gmail.com', 'UC Davis');

      expect(newEmployee.getRole()).toEqual('Intern');
    });
  });
});