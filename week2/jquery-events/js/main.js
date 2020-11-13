
  // console.log('jQUery:', $);

//global variables and general-purpose functions
let lastClickEvent;

const runThisLater = function(){

};

// DOM-dependent stuff goes here
$(document).ready( function(){


  $('#kitty').on('click', function( ev ){
    // this code will run every click
    console.log('kitty clicked!');

    runThisLater();

    $('#kitty').css( 'border', '10px solid red' );
    // can also write
    $(this).css( 'border', '10px solid red' );
    // ☝️ 'this' will contain the element that this event happened to!

    // $('h1').css('font-size', '40pt');
    $('h1').fadeToggle();

    console.log('ev:', ev);

    lastClickEvent = ev; // save into global variable

  }); // on kitty click


  $('#kitty').on('mouseenter', function(){
    console.log('Mouse ENTERED image area!');
  });

  $('#kitty').on('mouseleave', function(){
    console.log('Mouse LEFT image area.');
  });

  // $('#kitty').on('mousemove', function(){
  //   console.log('Mouse moved on image!' );
  // });

  $('#kitty').on('dblclick', function(){
    console.log('double clicked.');
  });

  // $('#kitty').on('hover',
  //   function(){
  //     console.log('Mouse ENTERED image area!');
  //   },
  //   function(){
  //     console.log('Mouse EXITED image area!');
  //   }
  // );

  $('input[type="text"]').on('keypress', function( event ){
    console.log('Key press event!');
    // const val = $(this).val();
    // console.log('val:', val);

    console.log('key event:', event);

    if( event.key === 'x' ){
      console.log('X key was pressed!');
    }

  });


  $('input[type="text"]').on('change', function(){
    console.log('Change event!');
  });



  // $('li').on('click', function(){
  //   const contents = $(this).html();
  //   console.log(`Some "${contents}" was clicked!`);
  //   $(this).css('color', 'red');
  // });



  $('#toggle').on('click', function(){
    console.log('Toggle button clicked');
    $('.triple-kitty1').toggle();
  });


  $('#fade').on('click', function(){
    $('.triple-kitty2').slideToggle();
  });


  // $(window).on('scroll', function(){
  //   console.log('Window scroll event!');
  // });


  $('*').on('click', function(ev){
    console.log('target:', ev.target);
    console.log('currentTarget:', ev.currentTarget);
    console.log('_____________________________');
    // ev.stopPropagation(); // prevent event from reaching parents
  });

  $('#kitty').css('position', 'relative');
  $('#kitty').css('z-index', '1');
  $('#kitty').animate( {
    left: '500px',
     top: '200px',
  }, 3000 );

  $('#kitty').animate( {left: 0}, 1000 );


});  // end of $(document).ready()
