import React, {Component} from 'react';
import axios from 'axios'; // AJAXhelper


const SERVER_URL = 'http://localhost:3000/planes.json'


class Seats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      seats: [{rows: 'rows', columns: 'columns'}]
    };

    const seats = () => {
      axios.get(SERVER_URL).then( (results ) => {
        console.log(results);
<<<<<<< HEAD
      });
     }
=======
        const flight = results.data.filter((f) => f.id == props.flight_id)[0]
        // search results for particular flight (const flight = {...})
        // const seatData = { rows: flight.rows, columns: flight.columns }
        // this.setState({ seats: flight});
      });
    }

    seats();
>>>>>>> 2b420ec90b41d6b51e73395d5d89740e58bde11b
  }

  render() {
    return (
<<<<<<< HEAD
      <ul>
        <li> </li>
      </ul>
    )
=======
    <p>{this.flight}</p>
    );
>>>>>>> 2b420ec90b41d6b51e73395d5d89740e58bde11b
  }
}


export default Seats;
