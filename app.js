var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config.json');
var jwtAuth = require('./app/libs/jwt-auth');
var routes = require('./app/routes');

var app = express();
var api = express.Router();
var auth = express.Router();

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static('public'));
app.use('/api/', api);
app.use('/auth/', auth);

api.use(jwtAuth);

routes(auth, api);

app.get('*', function(request, response) {
    response.sendfile('./public/index.html');
});

app.listen(8080);
