const { DynamoDBClient, CreateTableCommand} = require("@aws-sdk/client-dynamodb");
const returnNewDynamoDBTableStructure = require('./dynamodb.createTableStructure')
const dynamoConnectionObject = { region: "us-east-1", AWS_ACCESS_KEY_ID: "awsAccessKey", AWS_SECRET_ACCESS_KEY: "awsSecretKey"}

async function createNewTableInDynamoDB() {
  const dynamoDBClient = await new DynamoDBClient(dynamoConnectionObject);
  const createThisTable = await returnNewDynamoDBTableStructure()
  const createDynamoDBTable = await new CreateTableCommand(createThisTable);
  const dynamoDBTableCreationResponse = await dynamoDBClient.send(createDynamoDBTable);
  return dynamoDBTableCreationResponse
}

module.exports = createNewTableInDynamoDB;
