var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
     response.send('Hello World! ESPRESS'); 
     response.end();
});

app.listen(8888);

