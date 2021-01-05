
import React from 'react';

class SecretsForm extends React.Component {


  state = {
    secretContent: ''
  };


  handleChange = (ev) => {
    console.log('handleChange():', ev.target.value);
    this.setState({ secretContent: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();  // stop the form submit from reloading the page

    // Send the secret content to the parent component, so it
    // can submit it to the backend

    // This is actually calling the method 'saveSecret()' in the parent class Secrets
    this.props.onSecretSubmit( this.state.secretContent );

  }


  render(){

    return (
      <form onSubmit={ this.handleSubmit } >
        <textarea onChange={ this.handleChange } />
        <br />
        <button>Share</button>
      </form>
    );

  } // render

} // class SecretsForm

export default SecretsForm;
