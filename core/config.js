/* istanbul ignore file */
module.exports = {
  PORT: process.env.PORT || 9000,
  HOST: process.env.HOST || 'localhost',
  GITHUB_API_SEARCH_URL: process.env.GITHUB_API_SEARCH_URL || 'https://api.github.com/search/repositories'
}