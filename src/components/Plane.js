import React, {Component} from 'react';
import axios from 'axios'; // AJAXhelper

const SERVER_URL = 'http://localhost:3002/secrets.js'//http://localhost:3000/secrets.js' //http://c8c1af5d.ngrok.io/secrets.json'

class SecretForm extends Component {
  constructor () {
    super();
    this.state = { content: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    // console.log('change detected', e.target.value);
    this.setState( {content: e.target.value} );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content);
    // TODO clear the input
    this.setState({content: ''});
    //How would you return focus to the textarea
  }

  render () {
    return (
      // <h2>Secrets Form Coming Soon</h2>
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value = {this.state.content}></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render () {
    return (
      <div>
          { this.props.secrets.map( (s) => <p key={s.id}>{s.content}</p> ) }
      </div>
    );
  }
}

class Secrets extends Component {
  constructor () {
    super();
    this.state = {
      // secrets: [{content: 'secret A'}, {content: 'secret B'}, {content: 'secret C'}, {content: 'secret D'}]
      secrets: [{content: 'test secret'}] // request secrets by AJAX;
    };
    this.saveSecret = this.saveSecret.bind(this);
    // In a facnier application, our AJAX request would be in componentDidMount()
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then( (results ) => {
        // console.log(results);
        this.setState({ secrets: results.data});
        setTimeout(fetchSecrets, 4000); // Recursion
      });
    }
    //fetchSecrets(); // call every 4 secs
  }

  saveSecret(s) {
    // console.log(s, this, this.state.secrets); // new secrete

    axios.post(SERVER_URL, {content: s}).then( (results) => {
      // console.log('result from server', results);
      // add the newly created secret to the collection in our state.
      this.setState({ secrets: [results.data, ...this.state.secrets]} );
      });
    }


  render() {
    return ( // pass in this function to child so it can hanlde the function
      <div>
        <h1>Tell Us All Your Secrets </h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <Gallery secrets = {this.state.secrets} />
      </div>
    )
  }
}

export default Secrets;
