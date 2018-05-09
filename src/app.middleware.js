const logUrlWithTime = (request, response, next) => {
    console.log(`Recieved request to serve ${request.url} at ${new Date()}`)
    next()
}

module.exports = [logUrlWithTime]
