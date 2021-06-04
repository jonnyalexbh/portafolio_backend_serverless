const handler = require('../handler');
const service = require('../src/services/portfolios');
const { fixturesPortfolio } = require('./fixtures/index');

jest.mock('../src/services/portfolios');

describe(`GET portfolio`, () => {
  test('should be success', async () => {
    const event = { pathParameters: { id: '1' } };
    service.getPortfolio.mockResolvedValue(Promise.resolve(fixturesPortfolio));

    const portfolio = await handler.getPortfolio(event);
    expect(portfolio.statusCode).toBe(200);
  });
  test('should be fail statusCode code must be 404', async () => {
    const event = { pathParameters: { id: '1' } };
    service.getPortfolio.mockResolvedValue(Promise.resolve({}));

    const portfolio = await handler.getPortfolio(event);
    expect(portfolio.statusCode).toBe(404);
  });
  test('should be fail statusCode code must be 500', async () => {
    const event = { pathParameters: { id: '1' } };
    service.getPortfolio.mockResolvedValue(Promise.reject());

    const portfolio = await handler.getPortfolio(event);
    expect(portfolio.statusCode).toBe(500);
  });
});
