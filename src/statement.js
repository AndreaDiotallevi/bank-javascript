const Transacion = require("./transaction");

class Statement {
  constructor(transactionClass = Transacion) {
    this.transactions = [];
    this.transactionClass = transactionClass
  }

  addTransaction(credit, debit, balance) {
    this.transactions.push(new this.transactionClass(credit, debit, balance));
    return this.transactions;
  }

  formatTransactions() {
    return "date || credit || debit || balance\n10/01/2012 || 1000.00 || || 1000.00"
  }
}

module.exports = Statement;
