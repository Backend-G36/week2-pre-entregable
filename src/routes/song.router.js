const { getAll, create, getOne, destroy, update } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

//rutas estaticas
songRouter.route("/")
  .get(getAll)
  .post(create)


//rutas dinamicas
songRouter.route('/:id')
  .get(getOne)
  .delete(destroy)
  .put(update)

module.exports = songRouter;