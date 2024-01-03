const controller = require("../controllers/notes.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //Create note on logged in user
  app.post("/api/notes",
    [authJwt.verifyToken], controller.createNote);

  //Get notes for logged in user
  app.get("/api/notes/",
    [authJwt.verifyToken], controller.getNotes);

  //find note from the ID
  app.get("/api/notes/:id",
    [authJwt.verifyToken], controller.findNote);

  //delete note by id 
  app.delete("/api/notes/:id",
    [authJwt.verifyToken], controller.deleteNote);

  //modify note with id
  app.put("/api/notes/:id",
    [authJwt.verifyToken], controller.editNote);

  //search text within all notes for the user
  app.get("/api/search/",
    [authJwt.verifyToken], controller.searchNotes);
};