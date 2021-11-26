
const logger = () => {
    return (request, response, next) => {
        console.log(`Request :: ${request.method} ${request.url}`);
        console.log(`Response :: ${response.statusCode}`);

        next();
    };
}

module.exports = logger;