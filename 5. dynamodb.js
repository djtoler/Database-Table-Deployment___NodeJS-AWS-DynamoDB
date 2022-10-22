const createNewTableInDynamoDB = require('./dynamodb.createTable')
const createNewDynamoDBUser = require('./dynamodb.createUser')
const getDynamoDBUser = require('./dyanmodb.getUser')

async function createDocumentOrTable() {
    const returnNewDynamoDBTable = createNewTableInDynamoDB()
    return returnNewDynamoDBTable
}

async function createNewUser () {
    const returnNewDynamoDBUser = await createNewDynamoDBUser()
    return returnNewDynamoDBUser
}

async function getUser () {
    const returnDynamoDBUser = await getDynamoDBUser()
    return returnDynamoDBUser
}

createNewUser()

module.exports = createDocumentOrTable, createNewUser, getUser