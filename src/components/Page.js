import React, {Component} from 'react';

class Page extends Component {

  render() {
        return (
          <div className="container">

          <form onSubmit = {this.clicking} className="logout">

              <div className="h2">
                <p>Search your stupid flight</p>
<input type="text" className="form-control"/>
              </div>
          <button className="btn btn-primary">Search</button>
          </form>

          </div>
         );

  }
}

export default Page;
