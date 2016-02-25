/**
 * Created by nilesh.patil on 18-02-2016.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var facultySchema = new Schema({
    faculty_name: String,
    age: Number,
    qualification: String,
    subject: String,
    school_name: [{type: Schema.ObjectId, ref: 'school'}]
});

mongoose.model('faculty', facultySchema);