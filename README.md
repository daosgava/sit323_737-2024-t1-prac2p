# Simple HTML Server with Node.js

This Node.js program creates a simple HTTP server that serves an `index.html` file to the browser. The server listens on port 3000 and delivers the content of `index.html` to any client that requests it. This example demonstrates basic Node.js server capabilities, file serving, and stream piping.

## Features

- Serve an HTML file to the browser.
- Use of Node.js core modules (`http`, `fs`, `path`).
- Stream file contents to reduce memory usage.
- Simple setup with minimal external dependencies.

## Prerequisites

Before running this server, you need to have Node.js installed on your machine. This program has been tested with Node.js version 20.10.0 and above, but it should work with earlier versions that support the used modules.

To install Node.js, visit [https://nodejs.org/](https://nodejs.org/) and download the installer for your operating system.

To check if Node.js is installed and view its version, run:

```bash
node --version
