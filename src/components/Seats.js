import React, {Component} from 'react';
import axios from 'axios'; // AJAXhelper
import '../App.css';

const SERVER_URL = 'http://localhost:3000/planes.json'


class Seats extends Component {
  constructor () {
    super();
    this.state = {
      seats: [{rows: 'rows', columns: 'columns'}]
    };

    const seats = () => {
      axios.get(SERVER_URL).then( (results ) => {
        console.log(results);
      });
     }
  }

  render() {
    return (
      <ul>
        <li> </li>
      </ul>
    )
  }
}


export default Seats
