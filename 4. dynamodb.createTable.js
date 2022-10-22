const { DynamoDBClient, CreateTableCommand} = require("@aws-sdk/client-dynamodb");
const returnNewDynamoDBTableStructure = require('./dynamodb.createTableStructure')
const dynamoConnectionObject = { region: "us-east-1", AWS_ACCESS_KEY_ID: "AKIA4XS6OGG5ZHSUDLTM", AWS_SECRET_ACCESS_KEY: "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"}

async function createNewTableInDynamoDB() {
  const dynamoDBClient = await new DynamoDBClient(dynamoConnectionObject);
  const createThisTable = await returnNewDynamoDBTableStructure()
  const createDynamoDBTable = await new CreateTableCommand(createThisTable);
  const dynamoDBTableCreationResponse = await dynamoDBClient.send(createDynamoDBTable);
  return dynamoDBTableCreationResponse
}

module.exports = createNewTableInDynamoDB;