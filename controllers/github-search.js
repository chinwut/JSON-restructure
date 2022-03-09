const { getDataGitHubSearchAPIService } = require('../services/github-api-service')

const getDataFromGitHubAPI = async(query = '', currentPage = 1 ) => {
  const emptyItem = {
    q: query,
    page: currentPage,
    per_page: 10,
    total_count: 0,
    items: []
  }
  const dataFromApi = await getDataGitHubSearchAPIService(query, currentPage = 1)

  return dataFromApi
}

module.exports = {
  getDataFromGitHubAPI
}