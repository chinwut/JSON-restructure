const githubSearchService = require('../github-api-service');

jest.mock('request-promise', () => jest.fn().mockReturnValue({ total_count: 1000, items: [1000] }))
describe('services', () => {
  describe('github-api-service', () => {
    describe('Function getDataGitHubSearchAPIService', () => {
      it('should call service getDataGitHubSearchAPIService and result with mock up', async () => {
        const mockUpResult = { total_count: 1000, items: [1000] }
        const result = await githubSearchService.getDataGitHubSearchAPIService()
        expect(result).toEqual(mockUpResult)
      })
    })
  })
})