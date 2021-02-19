const cookie = require('cookie')

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World",
            myCookie: cookie.my_cookie
        })
    };
}