const express = require('express');
const apiRouter = express.Router();

module.exports = apiRouter;
const artistsRouter = require('./artists');

artistsRouter.param('artistId', (req, res, next, artistId) => {
  const sql = 'SELECT * FROM Artist WHERE Artist.id = $artistId';
  const values = { $artistId: artistId };
  db.get(sql, values, (error, artist) => {});
});
