// console.log('Youtube exercise');
//
// // Step by Step:
// //
// // Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
// const allLinks = document.querySelectorAll( 'a' );
// console.log('allLinks', allLinks);
//
// // Iterate through the array. In each iteration of the loop:
for( let i = 0; i < allLinks.length; i++ ){

  const currentLink = allLinks[i];

  // Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
  const videoURL = currentLink.href;

  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );
  console.log('thumbnailURL', thumbnailURL);

  // Create an IMG element using document.createElement(tagName)
  const img = document.createElement('img');

  // Set the "src" of the IMG element using newImage.src = 'something'
  img.src = thumbnailURL;
  console.log('img', img);

  // Append the IMG to the link using element.appendChild(element)
  currentLink.appendChild( img );

} // for


/////////////////////////////////////////////////////////
// jQuery version


// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
const $allLinks = $('a');

console.log('$allLinks', $allLinks);

// No looping necessary for most jQuery methods!
$allLinks.css( 'text-decoration', 'none' );

$allLinks.each( function(){
  // this is the code that .each() will apply
  // to every link tag in the jQuery results
  // (in this case, `$allLinks`)

  // How do we talk about the current <a> tag
  // in the array we are looping through?
  // console.log( this );  // 'this' is a vanilla DOM node

  const videoURL = $(this).attr('href'); // now it's jQuery
  console.log('videoURL', videoURL);

  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );
  console.log('thumbnailURL', thumbnailURL);
  console.log('=========================');

  // Create an IMG element using document.createElement(tagName)
  const $img = $('<img>');

  // Set the "src" of the IMG element using newImage.src = 'something'
  $img.attr('src', thumbnailURL);

  // Append the IMG to the link using element.appendChild(element)
  $(this).append( $img );

}); // end of .each()


// Iterate through the array. In each iteration of the loop:
// Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)
