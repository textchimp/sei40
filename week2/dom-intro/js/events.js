console.log('events!');

// Review of functions:

// Functions in JS are first-class: they live in variables!
const sayHello = function(){
  console.log('Hello world!');
};

// sayHello();

// Write a function that will run ANOTHER function for us,
// but "nicely" - we need to tell it which function we
// want it to run, by passing that function in to runNicely
// as an argument
const runNicely = function( functionToRunNicely ){

  console.log('Hello! I am about to run your function for you! I hope that is to your liking!');

  // run the provided function here
  console.log('functionToRunNicely is:', functionToRunNicely);
  functionToRunNicely();

  console.log('It was a real pleasure to run your function. Have a wonderful day.');

}; // runNicely


// runNicely( sayHello );
//
// runNicely(function(){
//   // this code is actually the contents of the function
//   // that we are creating 'on-the-fly' to give to runNicely
//   // i.e. and ANONYMOUS or INLINE function
//   console.log('HELLO FROM ANONYMOUS FUNCTION!!');
//   Math.rapdom();
// });

// 1. Query the DOM to get the element to which you want to add
//    an event handler (i.e. you want to respond to events on)
const heading = document.querySelector( 'h1' );
console.log('heading:', heading);

// 2. Using the variable you saved the element into,
//    run .addEventListener() on it, passing it the
//    event name and the function that should run when
//    the event happens
heading.addEventListener( 'click', function( ev ){
  // this is the code that will run when the click happens
  console.log('The h1 was clicked!');
  console.log( ev ); // the browser supplies this arg
});


//
// heading.removeEventListener('click', function(){
//   // this is the code that will run when the click happens
//   console.log('The h1 was clicked!');
// });

// setInterval( function(){
//   // this is the code that runs once per second
//   console.log('Hi again!');
//   console.log( Math.random() );
// }, 1000 );

const bill = document.querySelector('#mainImage');
bill.style.opacity = 1.0;
bill.style.position = 'relative';
bill.style.left = '0px';

const growID = setInterval( function(){
  // bill.width = bill.width + 10;
  // bill.width += 10;  // no need for CSS 'px' in this example
  // bill.style.opacity -= 0.01;
  //
  // if( bill.style.opacity <= 0 ){
  //   clearInterval( growID );
  // }

  // bill.style.left += '10px';

  let pos = parseInt( bill.style.left );
  pos += 1;
  bill.style.left = pos + 'px';


}, 10);

console.log('growID', growID);
