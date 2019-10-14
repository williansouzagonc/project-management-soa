const mongoose = require('mongoose')

module.exports.connect = () =>
  mongoose.connect(process.env.MONGODB_URL, { keepAlive: 1, useNewUrlParser: true, useFindAndModify: false })
