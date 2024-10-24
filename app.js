// Make sure this line is included at the top of your file
var http = require('http');  // This imports the 'http' module

const port = process.env.PORT || 4000; // Port 4000, or from the environment variable

// Creating the server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });



