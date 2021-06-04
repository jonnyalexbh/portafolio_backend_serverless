module.exports.getPortfolio = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'Get Portfolio' }),
  };
};
