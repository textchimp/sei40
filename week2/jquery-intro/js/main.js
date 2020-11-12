console.log('DOM with jQuery');

const $para = $('#firstPara');
console.log('$para', $para);

$para.css('background-color', 'white');
$para.css( { fontSize: '14pt', fontFamily: 'Comic Sans MS'  } );

// GETTER for HTML contents: no arguments
const pContents = $para.html();
console.log('first P tag contents:', pContents);

// SETTER for HTML contents: 1 arg, specify the new value
$para.html('NEW CONTENTS!');

// Create a new <a> tag, set the contents, style, and link URL,
// and add it as a child to the above <p> tag that we have already retrieved
const $linkTag = $('<a>');
$linkTag.html('I SAID SIGN THE GUESTBOOK');
$linkTag.css('color', 'red');
$linkTag.attr('href', 'guestbook.html');

$para.append( $linkTag );

///////////// Bill image

const $bill = $('#mainImage');

// attribute GETTER
const billURL = $bill.attr('src');
console.log('bill image src URL:', billURL);

// attribute SETTER: same function, but with extra
// argument to specify new value
$bill.attr('src', 'http://placekitten.com/300/200');

// $('#firstPara').fadeOut();



// Implicit iteration in jQuery!
const $allParaTags = $('p');

$allParaTags.html('all the same now');
$allParaTags.css('color', 'green');
// ☝️ The HTML contents and colour of ALL the p tags
// we matched is automatically updated by jQuery

// It turns out that this only gives us back
// the HTML contents of the FIRST p tag that matched
const allParaContents = $allParaTags.html();
console.log('all contents', allParaContents);
