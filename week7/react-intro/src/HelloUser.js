import React from 'react';


const KittenImage = (props) => {
  return <img src={`http://placekitten.com/${ props.width }/${ props.height }`} />;
};

class HelloUser extends React.Component {

  render(){

    // console.log('props', this.props );

    return (
      <div>
        <h2>Hello, { this.props.name }</h2>

        <KittenImage width={ this.props.imgWidth } height={ this.props.imgHeight } />

      </div>
    );


  } // render()

} // class HelloUser

// Make this class available to any other component
// that imports this file
export default HelloUser;
