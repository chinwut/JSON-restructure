const githubSearchController = require('../github-search');

jest.mock('../../services/github-api-service', () => ({
  getDataGitHubSearchAPIService: jest.fn().mockReturnValue({
    total_count: 1, items: [{
      "id": 211666,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMTE2NjY=",
      "name": "node-v0.x-archive",
      "full_name": "nodejs/node-v0.x-archive",
      "html_url": "html_url",
      "private": false,
      "description": "MDEyOk9yZ2FuaXphdGlvbjk5NTAzMTM=",
      "owner": {
        "login": "nodejs",
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjk5NTAzMTM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/9950313?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/nodejs",
        "html_url": "https://github.com/nodejs",
        "followers_url": "https://api.github.com/users/nodejs/followers",
        "following_url": "https://api.github.com/users/nodejs/following{/other_user}",
        "gists_url": "https://api.github.com/users/nodejs/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/nodejs/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/nodejs/subscriptions",
        "organizations_url": "https://api.github.com/users/nodejs/orgs",
        "repos_url": "https://api.github.com/users/nodejs/repos",
        "events_url": "https://api.github.com/users/nodejs/events{/privacy}",
        "received_events_url": "https://api.github.com/users/nodejs/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "forks": 7537
    }]
  }),
}))
describe('controllers', () => {
  describe('github-search', () => {
    describe('Function getDataFromGitHubAPI', () => {
      it('should call service getDataGitHubSearchAPIService and result with mock up item', async () => {
        const mockUpResult = {
          q: 'nodejs',
          page: 1,
          per_page: 10,
          total_count: 1,
          items: [{
            index: 1,
            repo_name: "nodejs/node-v0.x-archive",
            repo_url: "html_url",
            description: "MDEyOk9yZ2FuaXphdGlvbjk5NTAzMTM=",
            owner_name: "nodejs",
            owner_url: "https://github.com/nodejs",
            forks: 7537
          }]
        }
        const result = await githubSearchController.getDataFromGitHubAPI('nodejs', 1)
        expect(result).toEqual(mockUpResult)
      })
    })
  })
})