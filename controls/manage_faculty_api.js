/**
 * Created by nilesh.patil on 18-02-2016.
 */

var mongoose = require('mongoose'),
    faculty = mongoose.model('faculty');
school = mongoose.model('school');


exports.add = function (req, res) {
    var abc = new school({school_name: "Gurukul", address: "Ahmedabad", email: "gu@info.com"});
    abc.save(function (err) {
        if (err) throw err;

        var fact = new faculty({
            faculty_name: "Saint Marry",
            age: 25,
            qualification: "saint@info.com",
            subject: "maths",
            school_name: abc._id
        });
        fact.save(function (err, fact) {
            if (err) throw err;
            return res.send(fact);
        });
    });
};

exports.findAll = function (req, res) {
    faculty.find({}).populate('school_name').exec(function (err, results) {
        //return res.send("Faculty Records!!!");
        return res.send(results);
    });
};
exports.findById = function (req, res) {
    var name = req.params.id;
    faculty.findOne({'faculty_name': name}).populate('school_name').exec(function (err, result) {
        //return res.send("Find Faculty Record Based on->",id,"ID");
        return res.send(result);
    });
};
exports.update = function (req, res) {
    var name = req.params.name;
    var updates = req.params.up;

    faculty.update({'faculty_name': name}, {$set: {'faculty_name': updates}}, function (err, numberAffected, raw) {
        if (err) return console.log(err);
        return res.send(raw);
        //return res.send("Update Faculty Name Successfully", numberAffected);
    });
};
exports.delete = function (req, res) {
    var id = req.params.id;
    faculty.remove({'_id': id}, function (result) {
        return res.send(result);
        //return res.send("Your Faculty Data is Deleted From Database!!!!");
    });
};