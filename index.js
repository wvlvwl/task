var http = require('http')

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"})
	response.end("Hello, World!\n")
	echo "<p>Текущие дата и время: " . date("r") . "</p>"
}).listen(process.env.PORT)
