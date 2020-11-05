
console.log('Word guesser');

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


const secretWord =     [ 'T', 'E', 'S', 'T' ];
const guessedLetters = [ '_', '_', '_', '_' ];


const guessLetter = function( userGuess ){

  // This variable will 'remember' what happened overall
  // during the loop: was the user's guess correct for
  // *any* of the letters in the word, or not?
  // It's only a bad guess if the user's guess didn't
  // match any of the secret letters!
  // ...and we won't know if that happened until the loop
  // is finished.
  let matchFound = false;

  // 1. Loop through the secret words letters, and
  for( let i = 0; i < secretWord.length ; i++ ){

    const secretLetter = secretWord[i];

    // 2. check each letter against the user's current guess
    if( userGuess === secretLetter ){
      // Correct guess!
      console.log(`Correct guess for ${secretLetter} at position ${i}`);

      // Update the guessedLetters array to show the correct guess:
      guessedLetters[i] = secretLetter;

      // Rememeber the fact that a correct guess was made
      matchFound = true;

      // break; // to stop at the first match?

    } // correct guess check

  } // for


  // Now it's safe to check if a match was found for any letters:
  // if 'matchFound' is still false as we initialised it to be,
  // that's when we know the guess was incorrect.
  if( matchFound === false ){
    console.log('Bad guess! Try again.');
  }

  // TODO: work out if the word is completely guessed
  // Why not use a correct-guess counter instead of a loop
  // to work this out...

  console.log(`Guessed letters: ${guessedLetters}`);

}; // guessLetter()

// To play:
guessLetter( 'E' );  // etc
