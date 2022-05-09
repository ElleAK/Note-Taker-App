const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db");

router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.title = notes.length.toString();
  
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
      res.status(400).send("This note is not properly formatted.");
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
  });
  
  module.exports = router;