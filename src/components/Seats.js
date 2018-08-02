import React, {Component} from 'react';
import axios from 'axios'; // AJAXhelper


const SERVER_URL = 'http://localhost:3000/planes.json'


class Seats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      seats: [{rows: 'rows', columns: 'columns'}] // request secrets by AJAX;
    };

    const seats = () => {
      axios.get(SERVER_URL).then( (results ) => {
        console.log(results);
        const flight = results.data.filter((f) => f.id == props.flight_id)[0]
        // search results for particular flight (const flight = {...})
        // const seatData = { rows: flight.rows, columns: flight.columns }
        // this.setState({ seats: flight});
      });
    }

    seats();
  }

  render() {
    return (
    <p>{this.flight}</p>
    );
  }
}


export default Seats;
