const express = require('express');
const morgan = require('morgan');
const commentRouter = require('./routes/commentRouter');

const app = express();
app.use(morgan('dev'));

app.use('/api/comments', commentRouter);

module.exports = app;
