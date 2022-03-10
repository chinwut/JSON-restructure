const { getDataGitHubSearchAPIService } = require('../services/github-api-service')

const getDataFromGitHubAPI = async (query = '', currentPage = 1) => {
  const emptyTable = {
    q: query,
    page: currentPage,
    per_page: 10,
    total_count: 0,
    items: []
  }
  if (!query) return emptyTable
  try {
    const dataFromApi = await getDataGitHubSearchAPIService(query, currentPage)
    const currentIndexPage = currentPage - 1 ? (currentPage - 1) * 10 : 0
    const items = (dataFromApi.items && dataFromApi.items.length)
      ? dataFromApi.items.map((repo, index) => ({
        index: currentIndexPage + index + 1,
        repo_name: repo.full_name,
        repo_url: repo.html_url,
        description: repo.description,
        owner_name: repo.owner.login,
        owner_url: repo.owner.html_url,
        forks: repo.forks
      })) : []
    return {
      q: query,
      page: +currentPage,
      per_page: 10,
      total_count: dataFromApi.total_count,
      items: items
    }
  } catch (error) {
    return emptyTable
  }
}

module.exports = {
  getDataFromGitHubAPI
}