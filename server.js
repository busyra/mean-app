//console.log('Hello from node');
var express           = require('express'),
    app               = express();
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

//.get http verb
app.get('/', function(req, res){
//sends them to this page
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/meetups', meetupsController.list);

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function(){
  console.log('I\'m listening...');
})
