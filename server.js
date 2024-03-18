const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    // Get the file index.html path
    const filePath = path.join(__dirname, 'index.html');
    // Get the file stats
    const stat = fs.statSync(filePath);

    // Set the response headers
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    // Read the index.html and pipe it to the response object to send the file content to the browser
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
})

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

