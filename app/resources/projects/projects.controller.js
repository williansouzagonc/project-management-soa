const Project = require('./projects.model')

module.exports = {
  index: async (req, res) => {
    try {
      const projects = await Project.find()

      res.json(projects).status(200)
    } catch (err) {
      const errMessage = 'Error listing projects'
      req.log.error(errMessage, { err })

      return res.boom.badImplementation(errMessage)
    }
  },
  findById: async (req, res) => {
    try {
      const project = await Project.findById(req.params.id)

      if (!project) {
        return res.boom.notFound('Project not found')
      }

      res.json(project).status(200)
    } catch (err) {
      const errMessage = 'Error listing projects'
      req.log.error(errMessage, { err })

      return res.boom.badImplementation(errMessage)
    }
  },
  create: async (req, res) => {
    try {
      const project = new Project(req.body)

      await project.save()

      req.log.info(`Created new project with id ${project._id}`, { data: req.body })

      res.json(project).status(201)
    } catch (err) {
      const errMessage = 'Error creating new project'
      req.log.error(errMessage, { err })

      return res.boom.badImplementation(errMessage)
    }
  },
  update: async (req, res) => {
    try {
      const project = await Project.findOneAndUpdate({ _id: req.params.id }, req.body)

      if (!project) {
        return res.boom.notFound('Project not found')
      }

      req.log.info(`Updated project with id ${req.params.id}`, { data: req.body })

      res.json(project).status(200)
    } catch (err) {
      const errMessage = 'Error updating project'
      req.log.error(errMessage, { err })

      return res.boom.badImplementation(errMessage)
    }
  },
  delete: async (req, res) => {
    try {
      const project = await Project.findOneAndDelete({ _id: req.params.id })

      if (!project) {
        return res.boom.notFound('Project not found')
      }

      req.log.info(`Deleted project with id ${req.params.id}`)

      res.sendStatus(204)
    } catch (err) {
      const errMessage = 'Error deleting project'
      req.log.error(errMessage, { err })

      return res.boom.badImplementation(errMessage)
    }
  }
}
