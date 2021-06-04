exports.jsonResponse = (body = null, status = 200) => ({
  statusCode: status,
  body: JSON.stringify(body)
});
