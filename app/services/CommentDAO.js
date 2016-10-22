const db = require('../config/db');
const sql = require('../config/sqlProvider').comments;
const Comment = require('../models/Comment');

class CommentDAO {
  static all() {
    return db
    .map(sql.all, [], (row) => new Comment(row));
  }

  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];

    return db
    .one(sql.find, [key, value])
    .then((row) => new Comment(row));
  }

  static create({ author, body }) {
    return db
    .one(sql.create, [author, body])
    .then((row) => new Comment(row));
  }
}

module.exports = CommentDAO;
