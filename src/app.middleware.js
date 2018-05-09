const logUrlWithTime = (request, response, next) => {
    console.log(`Request ${request.method} ${request.url} ${new Date()}`)
    next()
}

module.exports = [logUrlWithTime]
