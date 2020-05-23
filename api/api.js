const express = require('express');
const apiRouter = express.Router();

const artistsRouter = require('./artists');

artistsRouter.param('artistId', (req, res, next, artistId) => {
  const sql = 'SELECT * FROM Artist WHERE Artist.id = $artistId';
  const values = { $artistId: artistId };
  db.get(sql, values, (error, artist) => {
    if (error) {
      next(error);
    } else if (artist) {
      req.artist = artist;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

// GET handler to the router for the / path
artistsRouter.get('/', (req, res, next) => {
  db.all(
    'SELECT * FROM Artist WHERE  Artist.is_currently_employed = 1',
    (err, artists) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({ artists: artists });
      }
    }
  );
});

module.exports = apiRouter;
