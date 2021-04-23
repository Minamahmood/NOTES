const router = require("express").Router();
const { notes } = require("../../db/db.json");
const {
    createNewNote,
    deleteNote,
    lodeNote,
} = require("../../lip/notefunction");

router.get("/notes", (req, res) => {
    let saved = lodeNote();
    console.log(saved);
    res.json(saved);
});

router.post("/notes", (req, res) => {
    let notes = lodeNote();
    console.log(notes);
    createNewNote(req.body, notes)
        .then((note) => res.json(note))
        .catch((error) => res.status(500).json(error));
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports = router;