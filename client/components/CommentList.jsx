import React, { Component } from 'react';
import request from 'superagent';
import CommentForm from './CommentForm.jsx';
import Comment from './Comment.jsx';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    request.get('/api/comments')
    .then((res) => {
      this.setState({
        comments: res.body,
      });
    });
  }

  render() {
    const commentList = this.state.comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          id={comment.id}
          author={comment.author}
          body={comment.body}
          createdat={comment.createdat}
        />
      );
    });

    return (
      <div>
        <CommentForm />
        {commentList}
      </div>
    );
  }
}

export default CommentList;
