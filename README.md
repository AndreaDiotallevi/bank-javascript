[Description](#description) | [Requirements](#requirements) | [Acceptance Criteria](#acceptance-criteria) | [User Stories](#user-stories) | [Domain Models](#domain-models) | [Design Approach](#design-approach) | [Code Structure](#code-structure) | [Technologies Used](#technologies-used) | [Getting Started](#getting-started) | [How to Run the Tests](#how-to-run-the-tests) | [How to Run the App](#how-to-run-the-app) | [Feature Test](#feature-test)

## Description

A JavaScript implementation of the bank tech test, which shows object-oriented programming principles and decoupled test suites.

## Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN)
* Deposits, withdrawal
* Account statement (date, amount, balance) printing
* Data can be kept in memory (it doesn't need to be stored to a database or anything)

## Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
                  
## User Stories

```
As a bank user
So that I can store some money
I want to be able to make a deposit to my account
```

```
As a bank user
So that I can use some of my stored money
I want to be able to make a withdrawal from my account
```

```
As a bank user
So that I know when I am running out of money
I want to see an error message when I try to withdraw more money than the actual balance
```

```
As a bank user
So that I can see all the history of my transactions in reverse chronological order
I want to be able to see my overall account statement
```

## Domain Models

| ACCOUNT         | STATEMENT           | TRANSACTION
| --------------- | ------------------- | ---------------
| @balance        | @transactions       | @date
| @statement      | @transactionClass   | @credit
|                 |                     | @debit
|                 |                     | @balance
|                 |                     |
| getBalance      | addTransaction      | format
| deposit         | formatTransactions  | 
| withdraw        |                     | 
| printStatement  |                     |

## Design Approach

The program has three classes and each of them has a clear responsibility:

- **ACCOUNT**: takes care of the account behaviours, like keeping track of the overall balance, deposit on the account, withdraw from the account and print the overall statement. A statement instance variable is dependency injected into the account class, to allow the transaction history and formatting responsibilities to be carried out by the statement class.

- **STATEMENT**: takes care of the transactions history and formatting of all transactions into a printable statement. The transaction class is dependency injected into the statement class, to allow the creation of a new transaction at each deposit and withdrawal.

- **TRANSACTION**: takes care of the single transaction properties and their formatting.

## Code Structure

The code is structured into two main folders:
- The ```src``` folder, which includes the code
- The ```tests``` folder, which includes the tests

## Technologies Used

* ```JavaScript``` for the code
* ```Jest``` for testing

## Getting Started

* Clone this repository with ```git clone```
* Change into the folder with ```cd bank-javascript```
* Run ```npm install``` to install all the dependencies
  
## How to Run the Tests

To run all the tests type ```npm test```

## How to Run the App

* Open the REPL with ```node```
* Require the model files with:
  - ```const Account = require("./src/account")```
  - ```const Statement = require("./src/statement")```
  - ```const Transaction = require("./src/transaction")```

## Feature Test

```
Welcome to Node.js v12.16.1.
Type ".help" for more information.
> const Account = require("./src/account");
undefined
> const Statement = require("./src/statement");
undefined
> const Transaction = require("./src/transaction");
undefined
> let account = new Account();
undefined
> account.getBalance();
0
> account.deposit(1000);
1000
> account.printStatement();
date || credit || debit || balance
05/04/2020 || 1000.00 || || 1000.00
undefined
> account.withdraw(500);
500
> account.printStatement();
date || credit || debit || balance
05/04/2020 || || 500.00 || 500.00
05/04/2020 || 1000.00 || || 1000.00
undefined
> account.withdraw(200);
300
> account.printStatement();
date || credit || debit || balance
05/04/2020 || || 200.00 || 300.00
05/04/2020 || 1000.00 || || 1000.00
05/04/2020 || || 500.00 || 500.00
undefined
```
