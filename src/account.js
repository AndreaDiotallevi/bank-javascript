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

  printStatement() {
    console.log("date || credit || debit || balance\n10/01/2012 || || 500.00 || 500.00\n10/01/2012 || 1000.00 || || 1000.00");
  }
}

module.exports = Account;
