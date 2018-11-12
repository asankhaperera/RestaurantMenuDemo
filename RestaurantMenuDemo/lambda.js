let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    ddb.put({
        TableName: 'MenuItems',
        Item: { 'itemCode': event.itemCode, 'itemName': item.name, 'itemPrice': event.itemPrice, 'itemType': event.itemType }
    }).promise().then(function (data) {
        //your logic goes here
        callback(null, 'Sucessfully persisted');
    }).catch(function (err) {
        //handle error
    });


    console.log("Hello APIX2");
    callback(null, { "message": "Successfully executed" });
}