import React, {Component} from 'react';

class Page extends Component {

  render() {
        return (
          <div className="container">

          <form onSubmit = {this.clicking} className="logout">
            <div className="flex-header">
              <div className="flex-1">
                <p>Search your stupid flight</p>
<input type="text" className="form-control"/>
              </div>
              <div className="flex-logout">

              </div>
            </div>
          </form>

          </div>
         );

  }
}

export default Page;
