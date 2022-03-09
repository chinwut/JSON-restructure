const { moveObjectToCorrectChildrenLevel } = require('../controllers/json-restructure')
const { getDataFromGitHubAPI } = require('../controllers/github-search')
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
}, {
  method: 'GET',
  path: '/api/github/search',
  options: {
    handler: async (req, h) => {
      const params = req.query || {}
      return await getDataFromGitHubAPI(params.q, params.page)
    },
    notes: ['the GitHub Search API with pagination to find all the repositories that match the query nodejs'],
    tags: ['api', 'GitHub Search API'],
  }
}]

const mainRouter = [
  ...ViewRouter,
  ...APIRouter
]

module.exports = mainRouter
