const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const commentRouter = require('./routes/commentRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/comments', commentRouter);

module.exports = app;
