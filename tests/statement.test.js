const Statement = require("../src/statement");
const Transaction = require("../src/transaction");

jest.mock("../src/transaction");

describe("Statement", () => {
  describe("addTransaction", () => {
    it("should return all transactions", () => {
      let statement = new Statement();
      expect(statement.addTransaction(1000, 0, 1000)).toEqual([new Transaction()]);
    })
  })
})
