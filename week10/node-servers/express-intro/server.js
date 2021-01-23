const express = require('express'); // Older version of ES6 'import' statement.. "CommonJS"
const app = express();  // create a server by running the express function the package gave us

// Tell Express to use the public 'folder'
// as a 'pass-through' static file server, i.e.
// if your app requests '/css/style.css' Express
// will look for that file as: public/css/style.css
app.use( express.static('public') );

const ejs = require('ejs');

// Use the EJS template system as an Express plugin
app.set('view-engine', ejs);


// MongoDB - NoSQL - no schemas, every row ('document') can have different fields! IT'S ANARCHY!
//  - Our rows ('documents') are just JS objects! NESTED DATA!!!
//
// Other NoSQL: CouchDB, Google Firebase - store objects
//
// NESTED DATA in a document (row):
// {
//   id: 2,
//   title: 'I love NoSQL',
//   body: '.....',
//   createdAt: '2020-...',
//   comments: [
//     {
//       id: 2234,
//       text: 'You are wrong, SQL forever!',
//       user: {
//         id: 12
//         name: 'OnlineDebater'
//       }
//     },
//     {
//       id: 123
//     }
//   ]
// }
//
//  - Rails: 'Validate on write' .... MongoDB - 'validate on read'
//
// Mongoose - MongoDB + schemas, ORM


// MERN Stack - Mongo Express React Node
// SQL: 'sequel'


// Start the server listening on a specific port
app.listen(  8000, () => {
  console.log('Now serving at http://localhost:8000 ...');
}); // listen

// Define the routes that we want to respond to, and how to respond

// Respond to a GET request to the root route '/'
app.get('/', (req, res) => {

  // req - an object containing information about this specific request (including params!)
  // res - an object with methods that we call to provide a response to this request

  console.log('A GET request to / was made!'); // You will only see this in iTerm

  res.send('<h1>Hello world!!! <img src="http://www.fillmurray.com/200/300"></h1>'); // This is what the browser sees!

}); // GET /



app.get('/hello/:person', (req, res) => {

  // res.send(`Hello to ${ req.params.person}`);

  // EJS/Express will look for this template
  // in a folder called 'views'
  res.render('greeting.ejs', {
    myData: req.params,
    age: 12
  });

}); // GET /hello/:person



app.get('/guestbook', (req, res) => {
  res.send('<h2>Sign My GuestBook!!</h2>')
}); //  GET /guestbook

//
//
// get '/dogs/:id' do
//
//   "Dogs show #{ params[:id] }"
// end

app.get('/dogs/:id', (req, res) => {

  console.log('Dog show', req.params);

  // res.send(`Dog show page: ${ req.params.id }`);

  const dogInfo = {
    name: 'Fido',
    age: 2,
    goodBoy: true
  }; // imagine this came from a database query

  res.json( dogInfo );

}); // GET /dogs/:id


// At the bottom of our specific routes, we
// can define a fallback error handler, which
// will only run if none of the above routes
// are matched

app.use( (req, res) => {

  console.log('Failed request!', req.url);

  // res.send('PAGE NOT FOUND!');
  res.sendStatus( 404 );

}); // app.use (fallback)
