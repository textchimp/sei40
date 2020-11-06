console.log('coding dictionary');

const dictionary = {

  // This nested object stores our actual coding terms
  // and their definitions as key:value pairs
  definitions: {
    method: 'a function which lives in an object (i.e. the value of a key)',
    scope: 'the visibility or lifetime of a variable within a program',
    'variadic function': 'a function which accepts a varying number of arguments from one call to the next'
  }, // definitions

  lookupTerm: function( term ){
    // console.log(`in lookupTerm('${term}')`);

    term = term.toLowerCase();  // ignore case
    const definition = this.definitions[term];

    if( term in this.definitions ){
      // found the definition
      console.log(`${term}: ${definition}`);
    } else {
      // not found
      console.log(`%cSorry, "${term}" is not in the dictionary.`, 'color: orange');
    }

  }, // lookupTerm()

  printAllDefinitions: function(){

    let termsCount = 0;
    for( const key in this.definitions ){
      this.lookupTerm( key );
      termsCount++;
    } // for..in

    console.log(`Total entries: ${termsCount}`);

  }, // printAllDefinitions()


  addDefinition: function( term, definition ){

    term = term.toLowerCase(); // force to lowercase

    if( term in this.definitions ){
      console.log('This term is already defined:');
    } else {
      // Add term
      this.definitions[term] = definition;
      console.log('Term added.');
    }

    this.lookupTerm( term );

  }, // addDefinition()

  removeDefinition: function( term ){
    // TODO
  },

  searchAllDefinitions: function( searchText ){
    // TODO: loop through all definition values for the searchText
  }


}; // dictionary
