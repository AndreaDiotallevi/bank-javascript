const Transacion = require("./transaction");

class Statement {
  static get Header() {
    return "date || credit || debit || balance";
  }

  constructor(transactionClass = Transacion) {
    this.transactions = [];
    this.transactionClass = transactionClass
  }

  addTransaction(credit, debit, balance) {
    this.transactions.push(new this.transactionClass(credit, debit, balance));
    return this.transactions;
  }

  formatTransactions() {
    let formattedTransactions = Statement.Header;
    this.transactions.reverse().map(transaction => {
      formattedTransactions += "\n" + transaction.format();
    })
    return formattedTransactions;
  }
}

module.exports = Statement;
