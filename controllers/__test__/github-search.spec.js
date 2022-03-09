const githubSearchController = require('../github-search');

jest.mock('../../services/github-api-service', () => ({
  getDataGitHubSearchAPIService: jest.fn().mockReturnValue({ total_count: 1000, items: [1000] }),
}))
describe('controllers', () => {
  describe('github-search', () => {
    describe('Function getDataFromGitHubAPI', () => {
      it('should call service getDataGitHubSearchAPIService and result with mock up', async () => {
        const mockUpResult = { total_count: 1000, items: [1000] }
        const result = await githubSearchController.getDataFromGitHubAPI()
        expect(result).toEqual(mockUpResult)
      })
    })
  })
})