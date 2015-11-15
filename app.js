var express= require('express');
var http = require('http');
var path = require('path');


var app = express();
app.set('port', process.env.PORT || 3000);
app.configure(function(){
	
app.use(express.static(path.join(__dirname,'./public')));
});
var server =http.createServer(app);


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




	
	
	
	
	
	
	
	