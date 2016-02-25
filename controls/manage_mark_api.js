var mongoose = require('mongoose');
var mark = mongoose.model('mark');
var school = mongoose.model('school');
var faculty = mongoose.model('faculty');
var student = mongoose.model('student');
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
            sc.save(function (err) {
                if (err) throw  err;

                var ma = new mark({
                    marks: 85,
                    school_name: abc._id,
                    faculty_name: fact._id,
                    student_name: sc._id
                });
                ma.save(function (err, ma) {
                    if (err) throw err;
                    return res.send(ma);
                });
            });
        });
    });
};

exports.findAll = function (req, res) {
    mark.find({}).populate('faculty_name school_name student_name').exec(function (err, items) {
        console.log(items);
        return res.send(items);
    });
};

exports.findById = function (req, res) {
    var mark1 = req.params.mark1;
    mark.findOne({'marks': mark1}).populate('faculty_name school_name student_name').exec(function (err, result) {
        return res.send(result);
    });
};
exports.update = function (req, res) {
    var mark1 = req.params.mark1;
    var mark2 = req.params.mark2;

    mark.update({'marks': mark1}, {$set: {'marks': mark2}}, function (err, numberAffected, raw) {
        if (err) return console.log(err);
        return res.send(raw);
    });
};

exports.delete = function (req, res) {
    var mark1 = req.params.mark1;
    mark.remove({'marks': mark1}, function (result) {
        return res.send(result);
    });
};
