var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(' Hai -sarath /sohail how r u,\n');
}) .listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});
