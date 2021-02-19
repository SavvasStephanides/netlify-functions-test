const cookie = require('cookie')

exports.handler = async function(event, context) {
    var cookies = cookie.parse(event.headers.cookie || '');
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello World",
            version: 2,
            myCookie: cookies.my_cookie
        })
    };
}