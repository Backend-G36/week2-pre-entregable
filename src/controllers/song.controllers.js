const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async (req, res) => {
  const result = await Song.findAll()
  return res.json(result)
});

module.exports = {
  getAll
}

/**
 * !1 - Vamos a importar al modelo Song
 * !2 - escribimos el controlador get:
 *  *? await Song.findAll()
 */