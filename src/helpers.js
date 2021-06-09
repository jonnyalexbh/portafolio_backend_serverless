exports.jsonResponse = (body = null, status = 200) => ({
  statusCode: status,
  body: JSON.stringify(body),
});

module.exports.getBody = (body) => JSON.parse(body);
