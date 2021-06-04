const { getPortfolio } = require('./src/services/portfolios');

module.exports.getPortfolio = async (event) => {
  const portfolio = await getPortfolio(event.queryStringParameters.id);

  if (portfolio.Item) {
    return { statusCode: 200, body: JSON.stringify(portfolio) };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ statusCode: 404, error: `User not found` }),
    };
  }
}

