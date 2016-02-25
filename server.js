var express = require('express'),
    mongoose = require('mongoose'),
    fs = require('fs');

var mongoUri = 'mongodb://localhost/school_management';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + mongoUri);
});


var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('public'));

require('./models/school_schema');
require('./models/faculty_schema');
require('./models/student_schema');
require('./models/mark_schema');
require('./menu_api')(app);

app.listen(1234, function () {
    console.log('Listening on port 1234...');
});
