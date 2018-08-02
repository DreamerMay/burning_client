import React, { Component } from 'react';
import Seats from './Seats';
import FlightInfo from './FlightInfo';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.location
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header header-flights flex-header">
          <div className="flex-1">
            <h1 className="logo">BURNING AIRLINES</h1>
            <h3>or how to set unrealistic expectations</h3>
            <h5>Thanks, GA</h5>
          </div>
          <div className="flex-1">
            <img src="https://i.ytimg.com/vi/SmHY3xqRmP4/maxresdefault.jpg" alt="Death"/>
          </div>
        </div>
        {/* <p>Search for a flight right here</p> */}
        <Page user_id={this.props.user_id} username={this.state.username} />
      <Seats flight_id={ 3 }/>
      </div>
    );
  }
}

export default App;
