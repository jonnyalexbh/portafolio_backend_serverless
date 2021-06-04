const handler = require('../handler');
const service = require('../src/services/portfolios');
const { fixturesPortfolioUpdate } = require('./fixtures/index');

jest.mock('../src/services/portfolios');

describe(`UPDATE portfolio`, () => {
  test('should be success', async () => {
    const event = { body: '{\n    "title":"Jose"\n}', pathParameters: { id: '1' } };

    service.updatePortfolio.mockResolvedValue(Promise.resolve(fixturesPortfolioUpdate));

    const portfolio = await handler.updatePortfolio(event);
    expect(portfolio.statusCode).toBe(200);
  });
  test('should be fail statusCode code must be 500', async () => {
    const event = { pathParameters: { id: '1' } };
    service.updatePortfolio.mockResolvedValue(Promise.reject());

    const portfolio = await handler.updatePortfolio(event);
    expect(portfolio.statusCode).toBe(500);
  });
});
