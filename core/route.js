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

const APIRouter = []

const mainRouter = [
  ...ViewRouter,
  ...APIRouter
]

module.exports = mainRouter
