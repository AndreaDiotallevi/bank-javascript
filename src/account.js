class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      throw("Not enough balance");
    }
    this.balance -= amount;
    return this.balance;
  }
}

module.exports = Account;
