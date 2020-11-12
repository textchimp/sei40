console.log('Youtube exercise');

// Step by Step:
//
// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
const allLinks = document.querySelectorAll( 'a' );
console.log('allLinks', allLinks);

// Iterate through the array. In each iteration of the loop:
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
