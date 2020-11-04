// console.log('arrays exercises');
//
// // Your top choices
// // Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
// //
// // For each choice, log to the screen a string like: "My #1 choice is blue."
// // Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number.
//
// const topDogs = [
//   "Novia Scotia Duck-Tolling Retriever",
//   "Leonberger",
//   "Labrador",
//   "Pug",
//   "West Highland White Terrier"
// ];
//
// for( let i = 0; i < topDogs.length; i++ ){
//   const currentDog = topDogs[ i ];
//   // console.log(`My #${i+1} choice is ${currentDog}.`);
//
//   const suffixes = [ 'st', 'nd', 'rd', 'th', 'th', 'th' ];
//
//   // let suffix;
//   // if( i === 0 ){
//   //   suffix = 'st';
//   //   console.log('HERE', suffix);
//   // } else if( i === 1 ){
//   //   suffix = 'nd';
//   // } else if( i == 2 ){
//   //   suffix = 'rd';
//   // } else {
//   //   suffix = 'th';
//   // }
//
//   console.log(`My ${i+1}${suffixes[i]} choice is ${currentDog}.`);
//
//
// } // for

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.

// const secretWord = [ 'F', 'O', 'X' ];  // global variable



const assignGrade = function( score ){

  // const score = 20;

  // console.log('assignGrade: testing score of ', score);

  if( score > 90 ){
    return 'A';
  } else if( score > 80 ){
    return 'B';
  } else if( score > 70 ){
    return 'C';
  } else if( score > 60 ){
    return 'D';
  } else {
    return 'F';
  }

}; // end of assignGrade()

const firstGrade = assignGrade( 67 );  // run the function we defined above
console.log( firstGrade );


const secondGrade = assignGrade( 93 );
console.log( secondGrade );
