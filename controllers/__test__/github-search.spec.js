const githubSearchController = require('../github-search');

jest.mock('../../services/github-api-service', () => ({
  getDataGitHubSearchAPIService: jest.fn().mockReturnValue({ total_count: 0, items: [1000, 1000] }),
}))
describe('controllers', () => {
  describe('github-search', () => {
    describe('Function getDataFromGitHubAPI', () => {
      it('should call service getDataGitHubSearchAPIService and return default result with mock up with no param', async () => {
        const mockUpResult = {
          q: '',
          page: 1,
          per_page: 10,
          total_count: 0,
          items: []
        }
        const result = await githubSearchController.getDataFromGitHubAPI()
        expect(result).toEqual(mockUpResult)
      })
      it('should call service getDataGitHubSearchAPIService and result with mock up item with error return default', async () => {
        const mockUpResult = {
          q: 'nodejs',
          page: 1,
          per_page: 10,
          total_count: 0,
          items: []
        }
        const result = await githubSearchController.getDataFromGitHubAPI('nodejs', 1)
        expect(result).toEqual(mockUpResult)
      })
      it('should call service getDataGitHubSearchAPIService and result with mock up item with error return default and pages more than 1', async () => {
        const mockUpResult = {
          q: 'nodejs',
          page: 2,
          per_page: 10,
          total_count: 0,
          items: []
        }
        const result = await githubSearchController.getDataFromGitHubAPI('nodejs', 2)
        expect(result).toEqual(mockUpResult)
      })
    })
  })
})

