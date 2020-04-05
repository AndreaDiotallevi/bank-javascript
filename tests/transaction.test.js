const Transaction = require("../src/transaction");

describe("Transaction", () => {
  describe("format", () => {
    it("should return a formatted transaction", () => {
      let transaction = new Transaction(1000, 0, 1000);
      expect(transaction.format()).toEqual("10/01/2012 || 1000.00 || || 1000.00");
    })
  })
})
