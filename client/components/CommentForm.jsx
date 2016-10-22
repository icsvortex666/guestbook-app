import React, { Component } from 'react';
import { withRouter, browserHistory } from 'react-router';
import request from 'superagent';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;

    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit(e) {
    e.preventDefault();

    const apiUrl = '/api/comments';
    request.post(apiUrl)
    .send({
      author: this.state.author,
      body: this.state.body,
    }).then(() => {
      this.props.router.push('/');
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="author"
          placeholder="Enter your full name..."
          className="form-control name"
          onChange={this.handleChange}
          required
        />
        <textarea
          type="text"
          name="body"
          placeholder="Leave your message..."
          className="form-control"
          maxLength="450"
          onChange={this.handleChange}
        />
        <div className="form-group">
          <input
            type="submit"
            value="Submit"
            className="btn btn-default btn-lg btn-block"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default withRouter(CommentForm);
