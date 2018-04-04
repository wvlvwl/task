var http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plan"})
	response.end('<p style="color:red">Hello, World!</p>\n')
}).listen(process.env.PORT)
