const mongoose = require('mongoose')

const { Schema } = mongoose

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is mandatory']
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: [
      'to_do',
      'in_progress',
      'code_review',
      'testing',
      'done',
      'released'
    ],
    default: 'to_do'
  }
},
{
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

ProjectSchema.set('toJSON', { versionKey: false })

// UserSchema.method({})

// UserSchema.static({})

module.exports = mongoose.model('Project', ProjectSchema)
