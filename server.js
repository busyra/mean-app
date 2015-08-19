//console.log('Hello from node');
var express = require('express'),
    app     = express();
//.get http verb
app.get('/', function(req, res){
//sends them to this page
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function(){
  console.log('I\'m listening...');
})
