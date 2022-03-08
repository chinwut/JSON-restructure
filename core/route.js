const { moveObjectToCorrectChildrenLevel } = require('../controllers/jsonRestructure')
const Joi = require('joi')

const ViewRouter = [
{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('./views/index.html')
  }
},
{
  method: 'GET',
  path: '/json-restructure',
  handler: (request, h) => {
    return h.file('./views/json-restructure.html')
  }
}]

const APIRouter = [{
  method: 'POST',
  path: '/api/restructure',
  options: {
    handler: (req, h) => {
      return moveObjectToCorrectChildrenLevel(req.payload)
    },
    notes: ['Re-organize JSON structure by parent level, followed by children level.'],
    tags: ['api', 'JSON Restructure'],
    validate: {
      payload: Joi.object()
    }
  }
}]

const mainRouter = [
  ...ViewRouter,
  ...APIRouter
]

module.exports = mainRouter
