
import React from 'react';
import '../App.css';

import axios from 'axios';

import SecretsForm from './SecretsForm';

// const RAILS_SECRETS_BASE_URL = 'http://localhost:3000/secrets';
const RAILS_SECRETS_BASE_URL = 'http://aeb6a8c3d420.ngrok.io/secrets';

class Secrets extends React.Component {

  state = {
    secrets: []
  };


  fetchSecrets = () => {

    axios.get( RAILS_SECRETS_BASE_URL )
    .then( (res) => {
      console.log('response:', res.data);
      this.setState({ secrets: res.data.reverse() }); // save into state
    })
    .catch( console.warn );

  } // fetchSecrets


  // Run this function as soon as the component is on the page
  componentDidMount(){

    console.log('mounted!');

    this.fetchSecrets();

    // Poll the server: keep refreshing the list of secrets every few
    // seconds, so the user will automatically see any new secrets added
    // by any users of the app
    window.setInterval( this.fetchSecrets, 2000 );

  } // componentDidMount


  saveSecret = (content) => {
    console.log('<Secrets> saveSecret()', {content});
    // POST the secret data to the Rails backend:
    axios.post( RAILS_SECRETS_BASE_URL, { content: content } )
    .then( (res) => {
      console.log('response from POST:', res.data);

      // Add the successfully-created secret to our list of secrets
      // in state, so it appears in the rendered list on the page.
      // To do this, we copy the existing array of secrets first by
      // using the spread operator '...', and add our new secret at
      // the start (newest first).
      this.setState({
        secrets: [ res.data, ...this.state.secrets ]
      });

    }) // .then
    .catch( console.warn );

  } // saveSecret


  render(){

    return (
      <div className="App">
        <h1>Spill Yer Guts</h1>

        <SecretsForm onSecretSubmit={ this.saveSecret } />

        <hr />

        <h3>Terrible Secrets of the General Public</h3>
        <ul>
        {
          this.state.secrets.map( secret => <li key={ secret.id }>{ secret.content }</li> )
        }
        </ul>

      </div>
    );

  } // render

} // class Secrets

export default Secrets;
