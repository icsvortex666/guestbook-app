class Comment {
  constructor({
    id,
    author,
    body,
    createdat,
  }) {
    this.id = id;
    this.author = author;
    this.body = body;
    this.createdat = createdat;
  }
}

module.exports = Comment;
