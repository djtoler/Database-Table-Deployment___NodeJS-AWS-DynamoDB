class DynamoTable {
    constructor( TableName, KeySchema, AttributeDefinitions, ProvisionedThroughput) {
      this.TableName = TableName;
      this.KeySchema = KeySchema;
      this.AttributeDefinitions = AttributeDefinitions;
      this.ProvisionedThroughput = ProvisionedThroughput;
    }
  }
  
  class DynamoTableBuilder {
      createDynamoTableName(TableName) {
          this.TableName = TableName;
          return this;
      }
      createDynamoTablePartitionKey(partitionKey, partitionKeyType, partitionKeyDataType) {
          this.partitionKey = partitionKey;
          this.partitionKeyType = partitionKeyType;
          this.partitionKeyDataType = partitionKeyDataType;
          return this;
      }
      createDynamoTableSortKey(sortKey, sortKeyType, sortKeyDataType) {
          this.sortKey = sortKey;
          this.sortKeyType = sortKeyType;
          this.sortKeyDataType = sortKeyDataType;
          return this;
      }
      createDynamoTableThroughputObject(readUnits, writeUnits) {
          this.readUnits = readUnits;
          this.writeUnits = writeUnits;
          return this;
      }
      buildNewDynamoDBTable() {
          return new DynamoTable(
              this.TableName,
              [{ AttributeName: this.partitionKey, KeyType: this.partitionKeyType },{ AttributeName: this.sortKey, KeyType: this.sortKeyType }],
              [{AttributeName: this.partitionKey, AttributeType: this.partitionKeyDataType},{AttributeName: this.sortKey, AttributeType: this.sortKeyDataType}],
              {ReadCapacityUnits: this.readUnits, WriteCapacityUnits: this.writeUnits}
          );
      }
  }
  
  module.exports = DynamoTableBuilder;



  
