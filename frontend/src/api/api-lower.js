// import client methods
import {
  DynamoDBClient, 
  PutItemCommand, 
  QueryCommand, 
  ListTablesCommand, 
  CreateTableCommand 
} from "@aws-sdk/client-dynamodb";

// import exception handlers
import {
  ResourceInUseException,
  ResourceNotFoundException
} from "@aws-sdk/client-dynamodb"

//todo: make endpoint var chosen based on local or remote env
const client = new DynamoDBClient(
  { endpoint: 'http://0.0.0.0:8000',
    // tls:true,
    region:"local", 
    credentials: {
      accessKeyId: 'fake',
      secretAccessKey: 'fake',
      sessionToken: 'fake'
    }
  });

async function insert(table, item_obj, rcc){
    const params = {
        TableName: table,
        Item: item_obj,
        ReturnConsumedCapacity: rcc
    };

    const command = new PutItemCommand(params);

    try {
        const data = await client.send(command);
        return data
      } catch (error) {
        console.log(error)
      }
}

async function list_tables(){

  const command = new ListTablesCommand({});

  try {
      const data = await client.send(command);
      return data
    } catch (error) {
      console.log(error)
    }
}

async function create_table(table, attr_defs, throughput, schema, table_class){

  const params = {
    TableName: table,
    AttributeDefinitions: attr_defs,
    ProvisionedThroughput: throughput,
    KeySchema: schema,
    TableClass: table_class
  }

  const command = new CreateTableCommand(params);

  try {
      const data = await client.send(command);
      return data
    } catch (e) {  
      if (e instanceof ResourceInUseException) {
        console.log("table in use: already created!")
      } else if (e instanceof ResourceNotFoundException) {
        console.log("resource not found!")
      } else {
        // Other errors
        console.log("other error")
        console.log(e)
      }
    }
}

async function retrieve(table, key_exp, exp_vals, rcc){
    const params = {
        TableName: table,
        KeyConditionExpression: key_exp,
        ExpressionAttributeValues: exp_vals,
        ReturnConsumedCapacity: rcc
    };

    const command = new QueryCommand(params);

    try {
        const data = await client.send(command);
        return data
      } catch (error) {
        console.log(error)
      }
}

export {
  insert, 
  retrieve,
  list_tables,
  create_table
};