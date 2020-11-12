console.log('About me');

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.querySelector('#nickname');
// console.log('nickname', nickname);
nickname.innerHTML = 'textchimp';

const faves = document.getElementById('favorites');
faves.innerHTML = 'Ruby, snorkelling';

const home = document.querySelector('#hometown');
home.innerHTML = 'Sydders';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const listItems = document.querySelectorAll('li');

for( let i = 0; i < listItems.length; i++ ){
  const currentItem = listItems[i];
  // console.log(currentItem);
  currentItem.className = 'listitem';
}


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.



















// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page.
// Copy this array of books:
var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
