'use strict'
const { celebrate, Joi } = require('celebrate')
const tilesController = require('./projects.controller')

module.exports = (app) => {
  app.get(
    '/projects',
    tilesController.index
  )

  app.get(
    '/projects/:id',
    celebrate({
      params: {
        id: Joi.string().regex(/^[0-9a-f]{24}$/i).required()
      }
    }),
    tilesController.findById
  )

  app.post(
    '/projects',
    celebrate({
      body: Joi.object().keys({
        title: Joi.string().trim().max(30).required(),
        description: Joi.string().max(200).required()
      })
    }),
    tilesController.create
  )

  app.patch(
    '/projects/:id',
    celebrate({
      params: {
        id: Joi.string().regex(/^[0-9a-f]{24}$/i).required()
      },
      body: Joi.object().keys({
        title: Joi.string().trim().max(30),
        description: Joi.string().max(200).allow(null),
        status: Joi.string().valid([
          'to_do',
          'in_progress',
          'code_review',
          'testing',
          'done',
          'released'
        ])
      })
        .or(
          'title',
          'description',
          'status'
        )
    }),
    tilesController.update
  )

  app.delete(
    '/projects/:id',
    celebrate({
      params: {
        id: Joi.string().regex(/^[0-9a-f]{24}$/i).required()
      }
    }),
    tilesController.delete
  )
}
