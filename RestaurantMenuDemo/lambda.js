exports.handler = function(event, context, callback) {
    console.log("Hello APIX");
    callback(null, {"message": "Successfully executed"});
}