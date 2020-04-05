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
    this.balance -= amount;
    return this.balance;
  }
}

module.exports = Account;
