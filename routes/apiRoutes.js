const fs = require("fs");

const router = require("express").Router();
const { createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

router.get("/notes", (req, res) => {
  let results = notes;
    results = notes;
    res.json(results);
});


router.post("/notes", (req, res) => {
 // set id based on index of next array
     let newNote = req.body;
     let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
         data.push(newNote);
    
    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
        if (err) throw (err);        
    }); 

    res.json(data);    
    .30

});
  
  module.exports = router;




// const path = require('path');
// const fs = require('fs');

// //creates unique id
// let uniqid = require('uniqid');

// //routing
// module.exports = (app) => {
//     app.get('/api/notes', (req, res) => {
//         res.sendFile(path.join(__dirname, '../db/db.json'));
//     });

//     app.post('/api/notes', (req, res) => {
//         let db = fs.readFileSync('db/db.json');
//         db = JSON.parse(db)
//         res.join(db);

//         let newNote = {
//             title: req.body.title, 
//             test: req.body.text,
//             id: uniqid(),
//         };

//         db.push(newNote);
//         fs.writeFileSync('db/db.json', JSON.stringify(db));
//         res.join(db);
//     });
// };

// const fs = require("fs");
// const router = require("express").Router();
// const { createNewNote } = require("../../lib/notes");
// const { notes } = require("../../db/db");
// var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

// router.get("/notes", (req, res) => {
//     let results = notes;
//       results = notes;
//     res.json(results);
//   });

//   router.post("/notes", (req, res) => {
//     // set id based on what the next index of the array will be
//     let newNote = req.body;
//     let uniqueId = (data.length).toString();
//     console.log(uniqueId);
//     newNote.id = uniqueId;
//     data.push(newNote);
    
//     fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
//         if (err) throw (err);        
//     }); 

//     res.json(data);    
// .30

// });
  
//   module.exports = router;