const express = require('express');
const apiRouter = express.Router();

module.exports = apiRouter;
const artistsRouter = require('./artists');

artistsRouter.param('artistId', (req, res, next, artistId) => {});
