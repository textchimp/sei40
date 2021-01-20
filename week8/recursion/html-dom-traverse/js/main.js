console.log('DOM traverse main.js loaded');


const traverseDOMIterative = (node) => {
  // print out node, and print all child
  // nodes, and child-child nodes etc
  // NO RECURSION ALLOWED


  // nodes.children is *not* an array, so we can't
  // use the familiar array methods on it
  // (in particular, i want to remove the first
  // item from the array using .shift)
  // We can convert it to a real array by "spreading"
  // it out using ...
  let nodesToVisit = [ ...node.children ];

  while( nodesToVisit.length > 0 ){
    console.log('----------------------');

    const currentNode = nodesToVisit.shift(); // remove from array

    console.log(currentNode.nodeName, currentNode.className);

    console.log('before adding:', nodesToVisit);
    // Add the children of this node to our list
    nodesToVisit = [ ...nodesToVisit, ...currentNode.children ];
    console.log('after adding:', nodesToVisit);


  } // while

};


const traverseDOMRecursive = (node) => {

  console.log(node.nodeName, node.className);

  for( let i = 0; i < node.children.length; i++ ){
    const currentNode = node.children[i];
    traverseDOMRecursive( currentNode );
  } // for


}; // traverseDOMRecursive

// traverseDOMRecursive( document.body );

traverseDOMIterative( document.body );
