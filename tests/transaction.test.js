const Transaction = require("../src/transaction");

describe("Transaction", () => {
  describe("format", () => {
    it("should return a formatted transaction", () => {
      const mockDate = new Date("2012-10-10");
      const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDate);
      let transaction = new Transaction(1000, 0, 1000);
      expect(transaction.format()).toEqual("10/10/2012 || 1000.00 || || 1000.00");
    })
  })
})
