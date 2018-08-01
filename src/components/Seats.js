import React, {Component} from 'react';
import axios from 'axios'; // AJAXhelper
import '../App.css';

const SERVER_URL = 'http://localhost:3000/planes.json'


class Seats extends Component {
  constructor () {
    super();
    this.state = {
      seats: [{rows: 'rows', columns: 'columns'}] // request secrets by AJAX;
    };

    const seats = () => {
      axios.get(SERVER_URL).then( (results ) => {
        console.log(results);
        this.setState({ seats: results.data});
      });
    }
  }

  // render() {
  //   return (
  //     <ul>
  //       {this.state.seats.map(rows => <li> {seats.rows}</li>)}
  //       {this.state.seats.map(columns => <li> {seats.columns}</li>)}
  //     </ul>
  //   )
  // }
}


export default Seats
