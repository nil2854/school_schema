/**
 * Created by nilesh.patil on 24-02-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var markschema = new Schema({
    marks : Number,
    student_name : {type: Schema.ObjectId, ref: 'student'},
    faculty_name : {type: Schema.ObjectId, ref: 'faculty'},
    school_name : {type: Schema.ObjectId, ref: 'school'}
});

mongoose.model('mark',markschema);