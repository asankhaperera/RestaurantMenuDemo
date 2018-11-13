let AWS = require('aws-sdk');
//const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": "Hello x World"
    }
    //let itemType = (event.queryStringParameters && event.queryStringParameters.type) || "NON_VEG";

callback(null, response);

/*    ddb.scan({
        TableName: 'MenuItems',
        ExpressionAttributeValues: {
            ':it': itemType
        },
        FilterExpression: 'itemType = :it'
    }).promise().then(function (data) {
        //your logic goes here
        if (data.Items) {
            response.body = JSON.stringify(data.Items)
        } else {
            response.body = "No items";
        }
        callback(null, response);
    }).catch(function (err) {
        //handle error
        response.body = JSON.stringify(err);
        callback(null, response);
    });*/

}