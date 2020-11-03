//
// console.log('Functions JS loaded!');
//
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

const tellFortune = function(numChildren, partnersName, location, jobTitle){

  const output = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numChildren} kids.`;

  return output;
};

const fortune = tellFortune( 5, 'Craigsy', 'Sydney', 'pro surfer' );

console.log( fortune );


// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
//
// Write a function named calculateDogAge that:
//
// takes 1 argument: your puppy's age.
// calculates your dog's human-equivalent age based on the conversion rate of 7 human years to 1 dog year.
// returns a string that looks like this: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Call that function 3 times with 3 different values for the puppy's age; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function( puppyAge, conversionRate ){

  const humanAge = puppyAge * conversionRate;

  return `Your doggo is ${humanAge} old in dog years.`;
  // return output;
};

const dogAge = calculateDogAge( 2, 20 );
console.log( dogAge );
