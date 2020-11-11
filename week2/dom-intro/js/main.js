
console.log('Hello DOM!');

// Retrieve a single tag/element (DOM node) by ID
const para = document.getElementById( 'firstPara' );
console.log('para:', para);

// Retrieve EVERY tag of a certain type from the page -
// it returns an ARRAY of DOM nodes
const allParagraphs = document.getElementsByTagName( 'p' );

// Retrieve EVERY tag with a certain class
const allLarger = document.getElementsByClassName( 'larger' );

// HTML5 DOM methods, inspired by jQuery:
// document.querySelector (one element)
// document.querySelectorAll (an array of matching elements)

const firstPara = document.querySelector( '#firstPara' );
console.log('firstPara:', firstPara);

// Let's change the font color for this paragraph
// (normally you would do this in an event handler instead)
firstPara.style.color = 'darkgoldenrod';
firstPara.style.border = '10px solid yellow';

// #firstPara {
// border: 10px solid yellow;
// }



const allStrongs = document.querySelectorAll( 'strong' );
console.log('allStrongs:', allStrongs);

const allLargerTheSequel = document.querySelectorAll( 'a, p' );
console.log('allLargerTheSequel:', allLargerTheSequel);
