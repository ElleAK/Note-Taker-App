const fs = require('fs');
const router = require('express').Router();
// creates a unique id for each note in database
const uniqid = require('uniqid');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.send(data)
    });
});
    // create variable for returned data
router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    // push newNote to parsed data
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);
        newData.push(newNote);

        // write new content of parsed data to db.json
        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;
            res.send('Note Added');
        })
    });
});

 // Delete
 router.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // delete note by id
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    // Rewrite note to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  });


module.exports = router;
