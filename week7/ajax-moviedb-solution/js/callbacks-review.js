
// Functions are "first-class" in JS:
// they live in variables; they are values,
// and they can be passed as arguments to other functions
const sayHello = function(){
  console.log('Hello!');
};

// Run the above function for me, after 1 second:
// setTimeout( sayHello, 3000 );

//
// settimeout 3000, do |i|
//   # this is the code that runs after 3s
// end

// Give an anonymous ('inline') functiont to setTimeout
// setTimeout( function(){
//   // this is the code inside the function that will
//   // be called after 3s
//   console.log('Anonymous hello!');
// }, 3000 )


// Create a function called runFiveTimes
// that takes a function as an argument, and
// runs it 5 times for you, one after the other
// (using a for loop)
const runFiveTimes = function( functionToRun ){
  // write a loop here, in the loop call functionToRun
  for( let i = 0; i < 5; i++ ){
    functionToRun(); // actually run the fn given as an argument
  } // for

}; // runFiveTimes()

// runFiveTimes( sayHello );
//
// runFiveTimes(function(){
//   console.log('anonymous function hello!');
// })


///////////  Ruby .each in Javascript!

const arr = ['groucho', 'harpo', 'chico'];

// JS version: arr is the first arg to each
// each(arr, fn);

// const each = function( array, fnToUse ){
//   for( let i = 0; i < array.length; i++ ){
//     fnToUse( array[i], i );
//   }
// }; // each()
//
//
// // example of calling each:
// each( arr, function( item, index ){
//   console.log( `ITEM #${ index } IS:`, item );
// });

// arr.each do |item|
//   puts item
// end


arr.forEach( function( elem, ind ){
  console.log('elem', elem, ind );
});

// arr.forEach( console.log );
