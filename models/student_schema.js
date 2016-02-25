/**
 * Created by nilesh.patil on 18-02-2016.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var studentSchema = new Schema({
    student_name: String,
    standard: String,
    school_name: {type: Schema.ObjectId, ref: 'school'},
    faculty_name: {type: Schema.ObjectId, ref: 'faculty'},
    grade: String
});


mongoose.model('student', studentSchema);