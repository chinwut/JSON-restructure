const request = require('request-promise')
const config = require('../core/config')

const getDataGitHubSearchAPIService = async (query = 'nodejs', currentPage = 1) => {
  const url = `${config.GITHUB_API_SEARCH_URL}`
  const requestOption = {
    url,
    method: 'GET',
    headers: {
      'User-Agent': 'hapi js'
    },
    qs: {
      q: query,
      page: currentPage,
      per_page: 10
    },
    json: true
  }

  const responseObject = await request(requestOption)
  return responseObject
}


module.exports = {
  getDataGitHubSearchAPIService
}