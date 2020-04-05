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
}

module.exports = Statement;
