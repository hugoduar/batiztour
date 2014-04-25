var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

var port = process.env.PORT || 5000;
server.listen(port);

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
app.get('/insertar', function(req, res){
	res.sendfile(__dirname + '/generador.html');
});
app.get('/generador', function(req, res){
	res.sendfile(__dirname + '/generador.html');
});
app.get('/g', function(req, res){
	res.sendfile(__dirname + '/generador.html');
});
app.get('/i', function(req, res){
	res.sendfile(__dirname + '/generador.html');
});
// Routing app ------------------
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));