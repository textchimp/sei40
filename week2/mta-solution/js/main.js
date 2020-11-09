console.log('MTA ======');

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

const mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

};

const singleLineTrip = function(line, start, end){
  console.log('singleLineTrip()');
  console.log('line = ', line);
  console.log('start = ', start);
  console.log('end = ', end);

  // Get the stations on the line whose name is
  // in the variable 'line'

  // Just to get this working, let's hardcode
  // the N stations as the stations we are
  // travelling on
  const lineStations = mta[line];
  // console.log('N stations:', lineStations);

  // Find out the positions of the start and end
  // stations in the line array
  // i.e. we know their names, but we need to find
  // out their indexes, so we can loop through them
  const startIndex = lineStations.indexOf(start);
  const endIndex   = lineStations.indexOf(end);

  console.log('startIndex =', startIndex);
  console.log('endIndex =', endIndex);

  // To print all the stations on this trip,
  // use a for loop which starts counting at the startIndex
  // we calculated above, and stops counting after it gets
  // to the endIndex

  if(  startIndex < endIndex  ){
    // forward direction
    console.log('forward!');
    // TODO: use .slice() instead of writing a loop
    for( let i = startIndex+1; i <= endIndex; i++ ){
      const currentStation = lineStations[i];
      console.log( i, currentStation );
    }
  } else {

    // reverse direction
    console.log('reverse!');
    // TODO: use .slice() instead of writing a loop
    for( let i = startIndex-1; i >= endIndex; i-- ){
      const currentStation = lineStations[i];
      console.log( i, currentStation );
    } // for

  } // else (reverse)



}; // singleLineTrip()


const planTrip = function(startLineName, startStationName, endLineName, endStationName){

  // 1. Work out whether this is actually a single-line
  //    trip or a multi-line trip
  //    - 1a: if single, just use singleLineTrip(?, ?, ? )
  //      1b: if multi, use singleLineTrip() twice!!
  //          ... with careful use of 'Union Square'
  //          as an argument to both singleLineTrip() calls


}; // planTrip()


// actually use the function we defined above
singleLineTrip( 'N', '34th', '8th' );
// output should be: 28th, 23rd, Union Square, 8th

// Test the same trip in the reverse direction:
singleLineTrip( 'N', '8th', '34th' );
// output should be: Union Square, 23rd, 28th, 34th

singleLineTrip( '6', '23rd', '33rd' );
