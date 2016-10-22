const express = require('express');
const CommentsController = require('../controllers/CommentsController');

const router = express.Router();

router.get('/', CommentsController.getAll);
router.get('/:id', CommentsController.getOne);
router.post('/', CommentsController.createComment);

module.exports = router;
