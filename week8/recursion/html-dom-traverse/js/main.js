console.log('DOM traverse main.js loaded');


const traverseDOMIterative = (node) => {
  // print out node, and print all child
  // nodes, and child-child nodes etc
  // NO RECURSION ALLOWED
};


const traverseDOMRecursive = (node) => {

  console.log(node.nodeName, node.className);
  // node.children is an array of child nodes

}; // traverseDOMRecursive

traverseDOMRecursive( document.body );
