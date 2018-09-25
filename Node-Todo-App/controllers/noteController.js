// List of notes.
var noteList = ["I'm a demo Note."];

//Controller responsible to list, create, update and remove Notes.
var noteController = function () {

    this.noteList = function (req, res) {
        res.render('index', { title: 'Todo web app using Node.js', notes: noteList });
    };

    this.createGet = function (req, res) {
        res.render('create', { title: 'Create Note' });
    };

    this.createPost = function (req, res) {
        noteList.push(req.body.note);
        res.redirect('/');
    };

    this.deleteGet = function (req, res) {
        var id = req.params.id;
        noteList.splice(id, 1);
        res.redirect('/');
    };

    this.updateGet = function (req, res) {
        var id = req.params.id;
        res.render('update', { title: 'Update Note', id: id, note: noteList[id] })
    };

    this.updatePost = function (req, res) {
        var id = req.body.id;
        var note = req.body.note;
        noteList[id] = note;
        res.redirect('/');
    };
}

module.exports = new noteController();