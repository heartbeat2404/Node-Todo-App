const express = require('express');
const router = express.Router();

// Require controller modules.
const noteController = require('../controllers/noteController');

/// Note Routes ///

// GET request for list of all Notes.
router.get('/', noteController.noteList);

// GET request for creating a Note. 
router.get('/create', noteController.createGet);

// POST request for creating Note.
router.post('/create', noteController.createPost);

// GET request to delete Note.
router.get('/delete/:id', noteController.deleteGet);

// GET request to update Note.
router.get('/update/:id', noteController.updateGet);

// POST request to update Note.
router.post('/update', noteController.updatePost);

module.exports = router;
