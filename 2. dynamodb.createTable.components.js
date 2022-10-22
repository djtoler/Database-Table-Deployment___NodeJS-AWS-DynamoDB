async function tableConstructor ( TableName, KeySchema, AttributeDefinitions, ProvisionedThroughput) {
    this.TableName = TableName;
    this.KeySchema = KeySchema;
    this.AttributeDefinitions = AttributeDefinitions;
    this.ProvisionedThroughput = ProvisionedThroughput;
}

async function createDynamoTableName(TableName) {
    this.TableName = TableName;
    return this;
}

async function createDynamoTablePartitionKey(partitionKey, partitionKeyType, partitionKeyDataType) {
    this.partitionKey = partitionKey;
    this.partitionKeyType = partitionKeyType;
    this.partitionKeyDataType = partitionKeyDataType;
    return this;
}

async function createDynamoTableSortKey(sortKey, sortKeyType, sortKeyDataType) {
    this.sortKey = sortKey;
    this.sortKeyType = sortKeyType;
    this.sortKeyDataType = sortKeyDataType;
    return this;
}

async function createDynamoTableThroughputObject(readUnits, writeUnits) {
    this.readUnits = readUnits;
    this.writeUnits = writeUnits;
    return this;
}

async function returnDynamoDBTableBuilderComponents () {
    const dynamoDBTableBuilderComponents = [createDynamoTableName, createDynamoTablePartitionKey, createDynamoTableSortKey, createDynamoTableThroughputObject]
    return dynamoDBTableBuilderComponents
}

async function returnNewDynamoDBTableBuildSequence () {
    return [
        this.TableName,
        [{ AttributeName: this.partitionKey, KeyType: this.partitionKeyType },{ AttributeName: this.sortKey, KeyType: this.sortKeyType }],
        [{AttributeName: this.partitionKey, AttributeType: this.partitionKeyDataType},{AttributeName: this.sortKey, AttributeType: this.sortKeyDataType}],
        {ReadCapacityUnits: this.readUnits, WriteCapacityUnits: this.writeUnits}
    ]
}

module.exports = {tableConstructor, returnDynamoDBTableBuilderComponents, returnNewDynamoDBTableBuildSequence}