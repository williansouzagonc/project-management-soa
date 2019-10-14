'use strict'

const { isCelebrate } = require('celebrate')

const errorHandler = () => async (err, req, res, next) => {
  return err.isBoom
    ? err
    : isCelebrate(err)
      ? res.boom.badRequest(err.joi)
      : res.boom.badImplementation()
}

module.exports = errorHandler
