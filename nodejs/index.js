import { createServer } from 'http';



createServer((request, response) => {
    console.log("METHOD", request.method);
    console.log("URL", request.url);
    console.log("HEADERS", request.headers);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Coming Soon..!");
}).listen(8000, () => {
    console.log("Listing on port 8000");
});