const { getAll } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
  .get(getAll)

module.exports = songRouter;