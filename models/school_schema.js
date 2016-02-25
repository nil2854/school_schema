/**
 * Created by nilesh.patil on 18-02-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var schoolSchema = new Schema({
    school_name: String,
    address: String,
    email: String
});

mongoose.model('school', schoolSchema);

