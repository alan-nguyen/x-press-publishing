const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const apiRouter = require('./api/api');
app.use('/api', apiRouter);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());
app.use(morgan('dev'));

app.listen(POST, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
