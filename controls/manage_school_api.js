/**
 * Created by nilesh.patil on 18-02-2016.
 */
var mongoose = require('mongoose'),
    school = mongoose.model('school');


exports.add = function (req, res) {
    var abc = new school({school_name: "Saint Marry", address: "Maninagar,Ahmedabad", email: "saint@info.com"});
    abc.save(function (err, abc) {
        if (err) throw (err);
        return res.send(abc);
    });
};

exports.findAll = function (req, res) {
    school.find({}, function (err, results) {
        return res.send(results);
        //return res.send("School Records!!!");
    });
};
exports.findById = function (req, res) {
    var id = req.params.id;
    school.findOne({'_id': id}, function (err, result) {
        // return res.send("Find Faculty Record Based on->",id,"ID");
        return res.send(result);
    });
};
exports.update = function (req, res) {
    var name = req.params.name;
    var updates = req.params.up;

    school.update({'school_name': name}, {$set: {'school_name': updates}}, function (err, numberAffected, raw) {
        if (err) return console.log(err);
        return res.send(raw);
        // return res.send("Update School Name Successfully", numberAffected);
    });
};
exports.delete = function (req, res) {
    var id = req.params.id;
    school.remove({'_id': id}, function (result) {
        return res.send(result);
        // return res.send("Your Faculty Data is Deleted From Database!!!!");
    });
};
exports.import = function (req, res) {
    var sc = new school(
        {"school_name": "MuktaJivan High School", "address": "Isanpur,Ahmedabad", "email": "muktajivan@info.com"});
    sc.save(function (err, sc) {
        if (err) throw (err);
        return res.send("School Data is Imported!!!");
        return res.send(sc);
    });
};
