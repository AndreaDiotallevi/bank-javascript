class Transaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  format() {
    let credit = this.credit.toFixed(2);
    let debit = this.debit.toFixed(2);
    let balance = this.balance.toFixed(2);
    return ["10/01/2012", credit, debit, balance].join(" || ").replace(" 0.00 ", " ");
  }
}

module.exports = Transaction;
