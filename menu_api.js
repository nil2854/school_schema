/**
 * Created by nilesh.patil on 18-02-2016.
 */
module.exports = function (app) {

    var schools = require('./controls/manage_school_api');
    var faculty = require('./controls/manage_faculty_api');
    var student = require('./controls/manage_student_api');
    var mark = require('./controls/manage_mark_api');

    //api for manage_school
    //query for find all school records
    app.get('/find_all_schools', schools.findAll);
    //query for find perticular school record based on ID
    app.get('/find_schools/:id', schools.findById);
    //query for add school record via post method
    app.post('/add_schools', schools.add);
    //query for update perticular school record based on school name
    app.put('/update_schools/:name/:up', schools.update);
    //query for delete perticular school record based on ID
    app.delete('/delete_schools/:id', schools.delete);
    //query for import static school record
    app.get('/import_school_record', schools.import);

    //api for manage_Faculty
    //query for find all faculty records
    app.get('/find_all_faculty', faculty.findAll);
    //query for find perticular faculty record based on ID
    app.get('/find_faculty/:id', faculty.findById);
    app.post('/add_faculty', faculty.add);
    app.put('/update_faculty/:name/:up', faculty.update);
    app.delete('/delete_faculty/:id', faculty.delete);


    //api for manage_student
    app.post('/add_student', student.add);
    app.get('/find_all_student', student.findAll);
    app.delete('/delete_student/:id', student.delete);
    app.put('/update_student/:name/:up', student.update);
    app.get('/find_student/:id', student.findById);


    //api for manage marks
    app.post('/add_student_marks',mark.add);
    app.get('/find_all_student_marks', mark.findAll);
    app.delete('/delete_student_marks/:mark1', mark.delete);
    app.put('/update_student_marks/:mark1/:mark2', mark.update);
    app.get('/find_student_marks/:mark1', mark.findById);

    app.get('/nilesh', function (req, res) {
        res.send('hello Everyone!!!\n');
    });
};