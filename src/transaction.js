class Transaction {
  constructor(credit, debit, balance) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
    this.date = new Date();
  }

  format() {
    const credit = this.credit.toFixed(2);
    const debit = this.debit.toFixed(2);
    const balance = this.balance.toFixed(2);
    const date = this.date.toLocaleDateString();
    return [date, credit, debit, balance].join(" || ").replace(" 0.00 ", " ");
  }
}

module.exports = Transaction;
