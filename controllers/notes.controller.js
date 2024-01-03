const db = require("../models");
const Note = db.note;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createNote = (req, res) => {
    // Save User to Database
    console.log("FIRSST NTOE")
    Note.create({
        userid: req.userid,
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription
    })
        .then(user => {
            res.send({ message: "Note was created!" });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.getNotes = (req, res) => {
    console.log(req.userid)
    Note.findAll({
        where: {
            userid: req.userid
        }
    })
        .then(notes => {
            if (!notes) {
                return res.status(404).send({ message: "Notes Not found." });
            }

            let notesList = [];
            for (let i = 0; i < notes.length; i++) {
                let model = {
                    id: notes[i].id,
                    noteTitle: notes[i].noteTitle,
                    noteDescription: notes[i].noteDescription
                }

                notesList.push(model);
            }


            res.status(200).send(notesList);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.searchNotes = (req, res) => {
    const query = req.query.q;
    Note.findAll({
        where: {
            userid: req.userid
        }
    })
        .then(notes => {
            if (!notes) {
                return res.status(404).send({ message: "Notes Not found." });
            }

            let notesList = [];
            for (let i = 0; i < notes.length; i++) {
                let model = {
                    id: notes[i].id,
                    noteTitle: notes[i].noteTitle,
                    noteDescription: notes[i].noteDescription
                }

                notesList.push(model);
            }

            let finalNotesList = notesList.filter(function (note) {
                return note.noteTitle.includes(query) || note.noteDescription.includes(query);
            });

            res.status(200).send(finalNotesList);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.findNote = (req, res) => {
    Note.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(notes => {
            if (!notes) {
                return res.status(404).send({ message: "Notes Not found." });
            }
            res.status(200).send({
                id: notes.id,
                noteTitle: notes.noteTitle,
                noteDescription: notes.noteDescription
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.deleteNote = (req, res) => {
    let id = req.params.id;
    Note.destroy({
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Note was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Note with id=${id}. Maybe Note was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};


exports.editNote = (req, res) => {
    let id = req.params.id;
    Note.update(
        {
            noteTitle: req.body.noteTitle,
            noteDescription: req.body.noteDescription
        }, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Note was updated successfully!"
                });
            } else {
                res.send({
                    message: `Cannot update Note with id=${id}. Maybe Note was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};