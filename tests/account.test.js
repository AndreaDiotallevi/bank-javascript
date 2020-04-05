const Account = require("../src/account");

describe("Account", () => {
  describe("getBalance", () => {
    it("should return an initial balance of 0", () => {
      let account = new Account();
      expect(account.getBalance()).toEqual(0);
    })
  })

  describe("deposit", () => {
    it("should return the updated balance of 1 after a deposit of 1", () => {
      let account = new Account();
      expect(account.deposit(1)).toEqual(1);
    })
  })

  describe("withdraw", () => {
    it("should return the updated balance of 0 after a withdrawal of 1 from a balance of 1", () => {
      let account = new Account();
      account.deposit(1);
      expect(account.withdraw(1)).toEqual(0);
    })
  })
})
