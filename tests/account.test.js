const Account = require("../src/account");

describe("Account", () => {
  it("should return an initial balance of 0", () => {
    let account = new Account();
    expect(account.getBalance()).toEqual(0);
  })
})
