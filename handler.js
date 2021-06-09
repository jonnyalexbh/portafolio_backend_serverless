const { getPortfolio, updatePortfolio } = require('./src/services/portfolios');
const { jsonResponse, getBody } = require('./src/helpers');
const { checkPortfolioFound } = require('./src/utils');

module.exports.getPortfolio = async (event) => {
  try {
    const { id } = event.pathParameters;
    const portfolio = await getPortfolio(id);

    if (checkPortfolioFound(portfolio)) {
      return jsonResponse({ internalError: 'resource_not_found', message: 'Portfolio not found' }, 404);
    }
    return jsonResponse(portfolio);
  } catch (error) {
    return jsonResponse({ internalError: 'internal_error', message: 'Internal Server Error' }, 500);
  }
};

module.exports.updatePortfolio = async (event) => {
  try {
    const { id } = event.pathParameters;
    const portfolio = await updatePortfolio(getBody(event.body), id);
    return jsonResponse(portfolio);
  } catch (error) {
    return jsonResponse({ internalError: 'internal_error', message: 'Internal Server Error' }, 500);
  }
};
