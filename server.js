/* 
    Create a simple server that serves the index.html file to the browser
    The server will listen on port 3000 and will serve the index.html file
*/

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

    // Create a read stream and pipe it to the response object to send the file content to the browser
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
})

// Start the server
server.listen(port, hostname, 3000, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

