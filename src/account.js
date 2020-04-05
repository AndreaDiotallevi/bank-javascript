const Statement = require("./statement");

class Account {
  constructor(statement = new Statement()) {
    this.balance = 0;
    this.statement = statement;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.statement.addTransaction(amount, 0, this.balance);
    return this.balance;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      throw("Not enough balance");
    }
    this.balance -= amount;
    this.statement.addTransaction(0, amount, this.balance);
    return this.balance;
  }

  printStatement() {
    console.log(this.statement.formatTransactions());
  }
}

module.exports = Account;
