
console.log('Hello underscore!');

// example data
const bros = [ 'Groucho', 'Harpo', 'Chico' ];

// Style 1:
// _.each( bros, function(){} );

// Style 2: more like Ruby
_(bros).each( function( item, i ){
  // This is the code that runs for each item in the array
  // It gets access to the current item in the array as we
  // loop through all items, via the argument we define
  // for this callback function
  console.log( i, item );
});

console.log('=======================');

// Underscore .each also works for objects!
const groucho = {
  name: 'Groucho',
  instrument: 'Guitar',
  vice: 'cigars'
};


_(groucho).each( function( val, key ){
  console.log( key, val );
} );


console.log('Vanilla forEach() =============== ');

bros.forEach( function( item ){
  console.log( item );
});

console.log('ES6 Arrow Functions! =============');

// Simplest version: no parentheses around single argument,
// no curly brackets around single expression in body of fn;
// implicit return of single expression value
bros.forEach( item => console.log(item) );

// Longer version: parentheses around 1 or more arguments,
// curly brackets around multiple lines of code in
// function body; no implicit return
bros.forEach( (item, i) => {
  console.log('position:', i);
  console.log('item:', item);
  // return xyz;
});

// Creating named functions looks the same:
// const myFunc = function(){ };
// const myFunc = () => { }; // NEED empty parens when no arguments

console.log(' map() ========================');

// map() transforms an input array of values into
// an output of values, according to what your
// callback function returns

const nums = [ 1, 2, 3, 4, 5 ];

const output = _(nums).map( function( item ){
  console.log('Current item', item)
  const result = item * 2;
  console.log('Result:', result);
  return result;
});

console.log('output of map():', output);
// [2, 4, 6, 8, 10]

const outputArrow = _(nums).map( item => item * 2 );

console.log('Arrow function map output:', outputArrow);


const es6Map = nums.map( item => item * 2 );
console.log('es6 map output:', es6Map );


console.log(' reduce() ======================= ');

// reduce() takes an input array, and "boils it down"
// to a single value, by applying the code you give
// it in your callback function

const sum = _(nums).reduce( function( runningTotal, item ){
  console.log('__________');
  console.log('runningTotal:', runningTotal);
  console.log('item:', item);
  const newTotal = runningTotal + item;
  console.log('newTotal:', newTotal );
  return newTotal;
});

console.log('reduced sum:', sum);

const joined = _(bros).reduce( function( str, bro ){
  return str + ', ' + bro;
});

console.log('reduced bros: ', joined );

const arrowReduce = _(nums).reduce( (acc, i) => acc + i );
console.log('arrowReduce', arrowReduce);

const es6Reduce = nums.reduce( (acc, item) => acc + item );
console.log('es6Reduce:', es6Reduce);

console.log('ActiveRecord-style Underscore methods');
// Methods for searching through data -
// usually an array of objects

const brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44, nums: [1,2,3,5] },
  { name: 'Harpo',   instrument: 'harp', vice: 'mustism', age: 42, nums: [1,2,3] },
  { name: 'Chico',   instrument: 'guitar', vice: 'infidelity', age: 39 , nums: [1,2,3,5] }
];

// Like ActiveRecord's "Brother.find_by instrument: 'harp' "
const harpist = _(brothers).findWhere( {instrument: 'guitar', age: 39} );
console.log('harpist:', harpist);

// Vanilla JS/ES6 equivalent: slightly different, instead of passing in an object
// to use to test for a match, you pass in a test function, and if the function
// returns true, the current item from the array is returned
// const es6Harpist = brothers.find( function( item ){
//   return item.instrument === 'harp' && item.age === 50;
// });

const es6Harpist = brothers.find( item => item.instrument === 'harp' );
console.log('es6Harpist', es6Harpist);

// Like ActiveRecord .where : find ALL matching 'rows'
const allGuitarists = _(brothers).where( { instrument: 'guitar' } ).map( bro => bro.name );
console.log('allGuitarists', allGuitarists );

// The ES6 vanilla equivalent is called .filter, and again, you must
// give it a test function, which makes it more versatile
const es6Guitarists = brothers.filter( item => item.instrument === 'guitar' );
console.log('es6Guitarists', es6Guitarists);
