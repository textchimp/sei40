import React from 'react';

import Clickr from './Clickr';

class HistoryEraser extends React.Component {

  state = {
    historyStillExists: true,
    todoList: [
      { text: 'First'   },
      { text: 'Second'  },
      { text: 'Third'   }
    ]
  };

  respondToButtonClick = (count) => {
    // This function is actually called by Clickr, because
    // we passed it Clickr as the 'phoneHome' prop, for it
    // to send us messages when the button is clicked -
    // Clickr calls it in its own click handler as
    // this.props.phoneHome( newClickCounter )
    console.log('HistoryEraser::respondToButtonClick()', count);

    if( count > 4 ){
      this.setState({ historyStillExists: false });
    }

  }


  render(){

    // let history = '';
    // if( this.state.historyStillExists ){
    //   history = 'All good, history is fine.';
    // } else {
    //   history = 'YOU FOOL, YOU ERASED HISTORY!';
    // }


    return(
      <div>
        <h1>
          History Eraser YOU FOOL!!!
        </h1>

        <ul>
        {
          // INPUT TO .map():
          // [
          //   { text: 'First'   },
          //   { text: 'Second'  },
          //   { text: 'Third'   },
          // ]
          this.state.todoList.map( item => <li>{ item.text }</li> )
          // output of .map():
          // [
          //   <li>First</li>,
          //   <li>Second</li>,
          //   <li>Third</li>,
          // ]

        }
        </ul>

        {
          this.state.historyStillExists
          ?
          <p>All is well, history still exists</p>
          :
          <h3>You fool, you erased history!!</h3>
        }

        <Clickr phoneHome={ this.respondToButtonClick }  />



      </div>
    );

  } // render()

} // class HistoryEraser

export default HistoryEraser;
