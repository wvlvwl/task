var http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plan"})
	response.end("[COLOR=red]Hello, World![/COLOR]\n")
}).listen(process.env.PORT)
