// console.log('GA Bank! Give us your money!!!');

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

const bank = {

  accounts: [
    { name: 'Ruby', balance: 1000000 },
    { name: 'Nookie', balance: 10 },
    { name: 'Socks', balance: 0 },
  ],

  // accounts: {
  //   'Ruby': { balance: 0, address: '', cc: '' }
  // },

  getBankGrandTotal: function(){

    let grandTotal = 0;
    for( let i = 0; i < this.accounts.length ; i++ ){
      const currentAccount = this.accounts[i];
      grandTotal += currentAccount.balance;
    } // for

    console.log('grandTotal:', grandTotal);

    return grandTotal;

  }, // getBankGrandTotal()

  addAccount: function( accountName ){

    // const newAccount = { name: accountName, balance: 0 };
    // this.accounts[ this.accounts.length ] = newAccount;
    this.accounts.push({
      name: accountName,
      balance: 0
    });

  }, // addAccount()

  deposit: function( accountName, amount ){

    // 1. Loop through all the accounts until you find
    // one whose .name matches the accountName given, and store it
    // 2. Update the balance on that account accordingly (+amount)

    // We need this to keep track of the correct account
    // when we we find it in the loop, so we can use it after
    // the loop is finished.
    let account = null;

    for( let i = 0; i < this.accounts.length; i++ ){
      if( this.accounts[i].name === accountName ){
        account = this.accounts[i];
        break;
      } // if
    } // for

    if( account === null ){
      // We did not find a matching account
      // (i.e. the account variable never got changed from
      // its initial null value by the loop code)
      console.log(`ERROR: could not find account with name ${accountName}`);
      return false;  // this indicates the deposit failed
    } else {
      // Found matchinig account
      account.balance += amount;
      console.log(`New balance for '${account.name}': ${account.balance}`);
      return true;  // this indicates the deposit was successful
    } // else

  }, // deposit()

  withdraw: function( accountName, amount ){
    // YOUDO
  }


}; // bank object


// const total = bank.getBankGrandTotal(); // test it!
//
// bank.deposit( 'Ruby', 500 ); // should work
// bank.deposit( 'Luke', 500 ); // should give an error (no such account)

//
// lines = {
//   'N': ['a', 'b', 'c'],
//   '6': []
// }
//
// for( let i = 0; i < lines[startLine].length; i++ ){
//
// }
//
// const singleLineTrip = function( line, startStation, endStation ){
//
// };


// Pseudocode

// 1. Get the user's choice of line, first station, second station

// singleLineTrip( 'N', '8th', 'Union Square' )

// 2. From the line name, get the array of stations for that line


// Functions


// simplest version: no arguments, no return value

let answer;  // global variable
























const sayHello = function(){
  // lines of code go here
  console.log('Hello!');
  return 'Goodbye';   // changing global variable

  // return undefined;  // this is the JS default
};

// const answer = sayHello();


// function which takes one argument:
const sayHelloToSomeone = function( personName, times ){
  console.log(`Hello, ${personName}`);
  return `It was nice to meet you, ${personName}`;
}; // sayHelloToSomeone()


// sayHelloToSomeone( 'Andy' );
// sayHelloToSomeone( 'Bruna' );
// sayHelloToSomeone( 'David' );

// const saturday = sayHelloToSomeone('David');
// console.log( saturday );

// function with two arguments, and return value:
const addNums = function( x, y ){
  console.log(`addNums(): x is ${x}, y is ${y}`);

  const sum = x + y;

  console.log(`The sum is ${sum}`);

  console.log(x, y, sum);

  return sum;



}; // addNums()


// const line = [ 'a', 'b', 'c', 'd' ];

const mta = {

  N: {
    'a st': {
      name: 'Station A St',
      mananger: 'some guy',
      trainCount: 10

    },
    b: {

    }
  },

  N: [
    { name: 'a', mananger: 'guy'},
    { name: 'b', mananger: 'guy'},
  ],

  L: ['d', 'e', 'f'],
  6: ['g', 'h', 'i']

};


const singleLineTrip = function( lineName, start, end ){
  console.log(mta);
};


// singleLineTrip('N', '8th', 'Times Square');

// arrays vs objects:

// both are for storing multiple items, i.e. they are
// 'containers' or 'collections'

// ARRAYS:
//   - when you care about the order of your items
//   - and, you don't mind using numbers to index the items
//   - you don't mind looping through the array to find an item
//    ( or maybe use .indexOf() )
//   - to loop: use  a for()


// OBJECTS:
//   - when you DON'T care about the order of the items,
//   - but you need to able to look items up by string index
//   - to loop: for..in:  for(const key in myObject){}
