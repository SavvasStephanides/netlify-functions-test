const cookie = require('cookie')

exports.handler = async function(event, context) {
    const hour = 3600000
    const twoWeeks = 14 * 24 * hour
    const myCookie = cookie.serialize('my_cookie', 'lolHi', {
        secure: true,
        httpOnly: true,
        path: '/',
        maxAge: twoWeeks,
    })
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Cookie set!"}),
        'headers': {
            'Set-Cookie': myCookie
        }
    };
}