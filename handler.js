const { getPortfolio } = require('./src/services/portfolios');
const { jsonResponse } = require('./src/helpers');
const { checkPortfolioFound } = require('./src/utils');

module.exports.getPortfolio = async (event) => {
  try {
    const portfolio = await getPortfolio(event.pathParameters.id);

    if (checkPortfolioFound(portfolio)) {
      return jsonResponse({ internalError: 'resource_not_found', message: `Portfolio not found` }, 404)
    }
    return jsonResponse(portfolio)
  } catch (error) {
    return jsonResponse({ internalError: 'internal_error', message: `Internal Server Error` }, 500)
  }
};
