var http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("This is my first Heroku app\n")
}).listen(process.env.PORT)
