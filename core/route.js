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
  },
  {
    method: 'GET',
    path: '/search',
    handler: async (request, h) => {
      const params = request.query || {}
      const { q, page, per_page, total_count, items } = await getDataFromGitHubAPI(params.q, params.page)
      const prev = (page - 1 <= 0) ? 1 : page - 1
      const next = page + 1

      return h.view('github-search-api', {
        prev,
        next,
        q,
        page,
        per_page,
        total_count,
        items
      })
    }
  }

]

const APIRouter = [{
  method: 'POST',
  path: '/api/restructure',
  options: {
    handler: (request, h) => {
      return moveObjectToCorrectChildrenLevel(request.payload)
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
    handler: async (request, h) => {
      const params = request.query || {}
      return await getDataFromGitHubAPI(params.q, params.page)
    },
    notes: ['The GitHub Search API with pagination to find all the repositories that match the query nodejs'],
    tags: ['api', 'GitHub Search API'],
    validate: {
      query: Joi.object({
        q: Joi.string().required(),
        page: Joi.number(),
      })
    }
  }
}]

const mainRouter = [
  ...ViewRouter,
  ...APIRouter
]

module.exports = mainRouter
