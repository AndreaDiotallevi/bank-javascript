const Account = require("../src/account");
const Statement = require("../src/statement");

jest.mock("../src/statement");

describe("Account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  })

  describe("getBalance", () => {
    it("should return an initial balance of 0", () => {
      expect(account.getBalance()).toEqual(0);
    })
  })

  describe("deposit", () => {
    it("should return the updated balance of 1 after a deposit of 1", () => {
      expect(account.deposit(1)).toEqual(1);
    })
  })

  describe("withdraw", () => {
    it("should return the updated balance of 0 after a withdrawal of 1 from a balance of 1", () => {
      account.deposit(1);
      expect(account.withdraw(1)).toEqual(0);
    })

    it("should raise an error if the user tries to withdraw more than the actual balance", () => {
      expect(() => { account.withdraw(1); }).toThrow("Not enough balance");
    })
  })

  describe("printStatement", () => {
    it("should print a formatted table with transactions date, credit, debit and balance, in reverse chronological order", () => {
      Statement.mockImplementation(() => {
        return {
          addTransaction: () => {},
          formatTransactions: () => {
            return "date || credit || debit || balance\n10/01/2012 || || 500.00 || 500.00\n10/01/2012 || 1000.00 || || 1000.00";
          }
        }
      })
      let account2 = new Account();
      const log = jest.spyOn(global.console, 'log');
      account2.deposit(1000);
      account2.withdraw(500);
      account2.printStatement();
      expect(log).toHaveBeenCalledWith("date || credit || debit || balance\n10/01/2012 || || 500.00 || 500.00\n10/01/2012 || 1000.00 || || 1000.00");
    })
  })
})
