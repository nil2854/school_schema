/**
 * Created by nilesh.patil on 18-02-2016.
 */


var mongoose = require('mongoose'),
    student = mongoose.model('student'),
    faculty = mongoose.model('faculty'),
    school = mongoose.model('school');

exports.add = function (req, res) {
    var abc = new school({school_name: "green lawns", address: "Ahmedabad", email: "gl@info.com"});
    abc.save(function (err) {
        if (err) throw err;

        var fact = new faculty({
            faculty_name: "ajay patel",
            age: 26,
            qualification: "med",
            subject: "science",
            school_name: abc._id
        });
        fact.save(function (err) {
            if (err) throw err;

            var sc = new student({
                student_name: "Sunil Bhavsar",
                standard: "7th",
                school_name: abc._id,
                faculty_name: fact._id,
                grade: "A"
            });
            sc.save(function (err, sc) {
                if (err) throw  err;
                return res.send(sc);
            });
        });
    });
};


exports.findAll = function (req, res) {
    student.find({}).populate('faculty_name', 'school_name').exec(function (err, items) {
        console.log(items);
        return res.send(items);
    });
};

exports.findById = function (req, res) {
    var id = req.params.id;
    student.findOne({'_id': id}).populate('faculty_name', 'school_name').exec(function (err, result) {
        return res.send(result);
    });
};


exports.update = function (req, res) {
    var name = req.params.name;
    var updates = req.params.up;

    student.update({'student_name': name}, {$set: {'student_name': updates}}, function (err, numberAffected, raw) {
        if (err) return console.log(err);
        return res.send(raw);
    });
};

exports.delete = function (req, res) {
    var id = req.params.id;
    student.remove({'_id': id}, function (result) {
        return res.send(result);
    });
};
