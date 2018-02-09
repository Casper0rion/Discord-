var HTTP = require("http");

HTTP.createServer(function(request, response) {
	var body = "";
	function respond(status) {
		response.writeHead(status, { "Content-Type": "text/plain" });
		response.end(body);
		respond = null;
	}
	function addListeners() {
		request.on("data", function(data) {
			body += data.toString();
		});
		request.on("end", function() {
			respond(200);
		});
		setTimeout(function() {
			respond && respond(500);
		}, 1000);
		console.log("handlers registered");
	}
	console.log("=== " + request.url + " ===");
	if (request.url === "/1") {
		console.log("case 1: immediately add event listeners");
		addListeners();
	} else if (request.url === "/2") {
		console.log("case 2: defer adding event listeners");
		process.nextTick(addListeners);
	} else {
		respond(404);
	}
	console.log("returning from request listener");
}).listen(8080);

