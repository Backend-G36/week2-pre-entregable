const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async (req, res) => {
  const result = await Song.findAll()
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const result = await Song.create(req.body)
  return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Song.findByPk(id)
  if (!result) return res.sendStatus(404)
  return res.json(result)
})

const destroy = catchError(async (req, res) => {
  const { id } = req.params
  const result = await Song.destroy({ where: { id } })
  if (!result) return res.sendStatus(404)
  return res.sendStatus(204)
})

const update = catchError(async (req, res) => {
  const { id } = req.params

  const result = await Song.update(
    req.body,
    { where: { id }, returning: true }
  )
  if (result[0] === 0) return res.sendStatus(404)

  return res.json(result[1][0])
})

// const update = catchError(async (req, res) => {
//   const { id } = req.params
//   const preUpdate = await Song.findByPk(id)

//   const result = await preUpdate.update(req.body)

//   if (!result) return res.sendStatus(404)

//   return res.json(result)

// })

module.exports = {
  getAll,
  create,
  getOne,
  destroy,
  update
}

/**
 * !1 - Vamos a importar al modelo Song
 * !2 - escribimos el controlador get:
 *  *? await Song.findAll()
 */