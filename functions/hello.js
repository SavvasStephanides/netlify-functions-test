const cookie = require('cookie')

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World",
            version: 2,
            event: event,
            context: context
        })
    };
}