// Movie DB Search
// Given a specific movie whose ID we know,
// find the main actor for this movie, and then
// list all the other movies that actor has appeared in

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=24d863d54c86392e6e1df55b9a328755';

// 1. Look up the credits for the movie Alien:
//    https://api.themoviedb.org/3/movie/348/credits?api_key=24d863d54c86392e6e1df55b9a328755

// 2. Get the ID of the first cast member (actor) from the above result, and
//    use it to make a second API request:
//    https://api.themoviedb.org/3/movie/348/credits?api_key=24d863d54c86392e6e1df55b9a328755

// 3. Loop through the cast entries for the above response and print out the movie names


// // 1. Get movie credits
// axios.get(`${BASE_URL}/movie/348/credits?${API_KEY}`)
// // success - promise "resolves"
// .then( (res) => {
//   console.log('success! (resolved)', res);
//
//   const firstActor = res.data.cast[0];
//   console.log('firstActor:', firstActor.id);
//
//   // 2. Use the actor ID to perform the secondary
//   // AJAX request, to get the actor's movies
//   axios.get(`${BASE_URL}/person/${ firstActor.id  }/credits?${API_KEY}`)
//   .then( (resPersonCredits) => {
//     console.log('Person credits:', resPersonCredits.data);
//
//     const movies = resPersonCredits.data.cast.map( m => m.title ).join('\n');
//     console.log(movies);
//
//     axios.get()
//     .then( res3 => {
//
//       // MORE NESTING!
//
//     })
//     .catch();
//
//   })
//   .catch( (errPersonCredits) => {
//     console.warn('error getting person credits', errPersonCredits);
//   });
//   // END of nested Axios request
//
// })
// // fail - promise "rejects"
// .catch( (err) => {
//   console.warn('error! (rejected)', err);
//   console.dir( err );
// });


// 1. Get movie credits

// axios.get().then().then().catch();
if( false ){
  axios.get(`${BASE_URL}/mmmovie/348/credits?${API_KEY}`)
  // success - promise "resolves"
  .then( (res) => {
    console.log('success! (resolved)', res);
    const firstActor = res.data.cast[0];
    console.log('firstActor:', firstActor.id);
    // 2. Use the actor ID to perform the secondary
    // AJAX request, to get the actor's movies
    return axios.get(`${BASE_URL}/person/${ firstActor.id  }/credits?${API_KEY}`);
  })
  // // try to catch errors only in the first API request
  // .catch( err => {
  //   console.warn('error in first API request');
  //   // IF YOU catch() an error, the catch implicitly returns a resolved promise!
  //   // i.e. the next then() chained after it will run!
  //   // return { data: '' };
  //   throw new Error('First API request failed!'); // create a new error to skip the following then()
  // })

  // fail - promise "rejects"
  .then( (resPersonCredits) => {
    console.log('Person credits:', resPersonCredits.data);
    const movies = resPersonCredits.data.cast.map( m => m.title ).join('\n');
    console.log(movies);
    // return 'dogs';
  })
  .then( (data) => {
      console.log('THIRD then running:', data);
  })
  // This catch will catch errors thrown by ANY of the above code
  .catch( (err) => {
    console.warn('error! (rejected)', err);
    console.dir( err );
  })

  console.log('End of file');

  // END of nested Axios request

} // if(false)

// Async-await: handling promises WITHOUT using .then() + callback functions

const getCredits = async () => {

  try {

    const res = await axios.get(`${BASE_URL}/mmmmovie/348/credits?${API_KEY}`);
    // The next line of code will not run until the promise has resolved (i.e. we have the response)
    // The await expression above will return the value of the resolved promise, i.e.
    // it will evaluate to whatever you would get in your then() callback function's argument
    // (what we have called "res" above)
    const firstActor = res.data.cast[0];
    console.log('firstActor', firstActor.id);

    const resPersonCredits = await axios.get(`${BASE_URL}/person/${ firstActor.id  }/credits?${API_KEY}`);

    const movies = resPersonCredits.data.cast.map( m => m.title ).join('\n');
    console.log(movies);

    return movies;

  } catch( err ){
    console.log('In catch block: ', err);
  }


};


// const result = getCredits();
// console.log('result', result);

// Making our own Promises (and keeping them)

const waiter = (message, forceResolve=false) => {

  return new Promise( (resolve, reject) => {

    // Do your async work here
    console.log('Inside the promise callback', message);

    setTimeout( () => {

      console.log('Timeout!', message);
      const coinToss = Math.random() > 0.5;
      if( forceResolve || coinToss ){
        resolve('RESOLVING', message); // Trigger .then() callback
      } else {
        reject('REJECTING', message);  // Trigger .catch() callback
      }

    }, 2000 ); // end of setTimeout

  }); // end of new Promise()

}; // waiter()

const wait = waiter('first', true)
.then( data => {
  console.log('First .then', data);
  return waiter('second');
})
.then( data => {
  console.log('Second .then:', data);
})
.catch( err => {
  console.log('Caught error:', err);
});
