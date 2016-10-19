import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="well">
            <div className="page-header">
              <h1>Guestbook</h1>
            </div>
            <form>
              <input
                type="text"
                placeholder="Enter your full name..."
                className="form-control name"
              />
              <textarea
                type="text"
                placeholder="Leave your message..."
                className="form-control"
                maxLength="450"
              />
              <div className="form-group">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-default btn-lg btn-block"
                />
              </div>
            </form>
            <p className="message">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                <br />
                <small className="text-muted pull-right">by Annonymous</small>
              </blockquote>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
