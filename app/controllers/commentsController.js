const CommentDAO = require('../services/CommentDAO');

class CommentController {
  static getAll(req, res) {
    CommentDAO.all()
    .then((comments) => {
      res.status(200).json(comments);
    });
  }

  static getOne(req, res) {
    CommentDAO.findBy({
      id: req.params.id,
    })
    .then((comment) => {
      res.status(200).json(comment);
    });
  }

  static createComment(req, res) {
    const commentData = req.body;

    CommentDAO.create(commentData)
    .then((comment) => {
      res.status(200).json(comment);
    });
  }
}

module.exports = CommentController;
