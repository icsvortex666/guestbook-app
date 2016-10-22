import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="well">
              <div className="page-header">
                <h1>Guestbook</h1>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
