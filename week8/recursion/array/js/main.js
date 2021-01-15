const arr = [1, 2, 3];

// for( let i = 0; i < arr.length; i++ ){
//   console.log( arr[i] );
// }
//
// arr.forEach( item => console.log(item) );

const recursive_foreach = (array, indent=0) => {

  // 1. REMOVE the first item from the array and print it
  const [first, ...rest] = array;

  const spacing = Array(indent).fill('      ').join('');

  console.log(`${spacing}>>> starting recursive_foreach([ ${ array } ], ${indent})`);
  console.log(`${spacing}first: `, first );

  // 2. Pass the REST of the array to the same function
  //    recursively...
  // 3. ...until the array is empty (base case)
  if( rest.length > 0 ){
    recursive_foreach( rest, indent+1 );
  }

  console.log(`${spacing}<<< returning from recursive_foreach([ ${ array } ], ${indent})`);

}; // recursive_foreach

debugger;  // start the debugger here
recursive_foreach( arr );
