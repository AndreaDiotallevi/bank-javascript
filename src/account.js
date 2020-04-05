class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit() {
    return this.balance + 1;
  }
}

module.exports = Account;
