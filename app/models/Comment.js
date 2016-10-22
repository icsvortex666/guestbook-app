class Comment {
  constructor({
    id,
    author,
    body,
    createdAt,
  }) {
    this.id = id;
    this.author = author;
    this.body = body;
    this.created_at = createdAt;
  }
}

module.exports = Comment;
