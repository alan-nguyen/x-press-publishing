const express = require('express');
const artistsRouter = express.Router();
const sqlite3 = require('sqlite3');

module.exports = artistsRouter;

const db = new sqlite3.Database(
  process.env.TEST_DATABASE || './database.sqlite'
);

// GET handler to the router for the / path
artistsRouter.get('/', (req, res, next) => {
  db.all(
    'SELECT * FROM Artist WHERE  Artist.is_currently_employed = 1',
    (err, artists) => {}
  );
});
