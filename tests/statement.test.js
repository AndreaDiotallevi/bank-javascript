const Statement = require("../src/statement");
const Transaction = require("../src/transaction");

jest.mock("../src/transaction");

describe("Statement", () => {
  let statement;

  beforeEach(() => {
    statement = new Statement();
  })

  describe("addTransaction", () => {
    it("should return all transactions", () => {
      expect(statement.addTransaction(1000, 0, 1000)[0]).toBeInstanceOf(Transaction);
    })
  })

  describe("formatTransaction", () => {
    it("should return a formatted table with transaction date, credit, debit and balance", () => {
      Transaction.mockImplementation(() => {
        return {
          format: () => {
            return "10/10/2012 || 1000.00 || || 1000.00";
          }
        }
      })
      statement.addTransaction(1000, 0, 1000);
      expect(statement.formatTransactions()).toEqual("date || credit || debit || balance\n10/10/2012 || 1000.00 || || 1000.00");
    })
  })
})
