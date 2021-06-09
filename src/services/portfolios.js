const AWS = require('aws-sdk');
const config = require('../config');
const logger = require('../logger');

const awsConfig = {
  ...new AWS.Config({
    endpoint: config.dynamodb.endpoint,
    accessKeyId: config.amazon.accessKeyId,
    secretAccessKey: config.amazon.secretAccessKey,
    region: config.amazon.region,
  }),
};

const db = new AWS.DynamoDB.DocumentClient(awsConfig);
const tableName = config.dynamodb.table;

exports.getPortfolio = (id) => {
  const params = {
    TableName: tableName,
    Key: {
      id,
    },
  };

  return db
    .get(params)
    .promise()
    .then((item) => item)
    .catch((error) => {
      logger.error(error);
      throw new Error('An error occurred while trying to get the portfolio');
    });
};

exports.updatePortfolio = (body, id) => {
  const params = {
    TableName: tableName,
    Key: { id },
    UpdateExpression: 'set title = :t',
    ExpressionAttributeValues: {
      ':t': body.title,
    },
    ReturnValues: 'ALL_NEW',
  };

  return db.update(params)
    .promise()
    .then((item) => item)
    .catch((error) => {
      logger.error(error);
      throw new Error('An error occurred while trying to update the portfolio');
    });
};
