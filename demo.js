const http = require('http'); // Import the built-in http module

// Use the PORT environment variable provided by Render, or default to 3000 for local development
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello from your Node.js app!\n');
});

// Start the server, binding to the specified port and host
server.listen(port, host, () => {
  // You might see your "hello i am sneha... logged in successfully" message here as well
  console.log('hello i am sneha... logged in successfully');
});