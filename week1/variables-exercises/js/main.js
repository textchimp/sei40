
console.log('JS loaded!');


// Do your exercises here:
//
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

console.log('Fortune Teller');

const numChildren = 8;
const partnersName = 'Betty';
const geographicLocation = 'Glasgow';
const jobTitle = 'chimney sweep';

// const fortune = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numChildren + " kids.";

// String interpolation
const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numChildren} kids.`;


console.log( fortune );


//
// The Age Calculator
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

console.log('Age Calculator');

const currentYear = 2020;
const birthYear = 2000;

const ageAfterBirthday  = currentYear - birthYear;
const ageBeforeBirthday = ageAfterBirthday - 1;

const ageOutput = `You are either ${ageBeforeBirthday} or ${ageAfterBirthday}.`;

console.log( ageOutput );


// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

console.log('Lifetime Supply Calculator');

const currentAge = 60;
const maxAge = 100;
const amountPerDay = 5;

const yearsRemaining = maxAge - currentAge;
const amountPerYear = amountPerDay * 365.25;
const totalSnacksRequired = amountPerYear * yearsRemaining;

console.log(`You will need a total of ${totalSnacksRequired} to last you until the ripe old age of ${maxAge}.`);

// The Temperature Converter
// It's hot out! Let's make a converter.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

let celsiusTemp = 47;
let fahrenheitTemp = (celsiusTemp * 1.8) + 32;
console.log(`${celsiusTemp}° C is ${fahrenheitTemp.toFixed(1)}° F.`);

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
fahrenheitTemp = 116.6;
celsiusTemp = (fahrenheitTemp - 32) / 1.8;

console.log(`${fahrenheitTemp}°F is ${celsiusTemp.toFixed(1)}°C.`);
