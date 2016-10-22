import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

const propTypes = {
  id: React.PropTypes.number,
  author: React.PropTypes.string,
  body: React.PropTypes.string,
  createdat: React.PropTypes.string,
};

class Comment extends Component {
  render() {
    return (
      <blockquote id={this.props.id}>
        <p className="message">
          {this.props.body}
          <br />
          <small
            className="text-muted pull-right"
          >{this.props.author} @ <Timestamp time={this.props.createdat} />
          </small>
        </p>
      </blockquote>
    );
  }
}

Comment.propTypes = propTypes;

export default Comment;
