const router = require('express').Router();
const notes = require('../apiRoutes/notesRoutes');
router.use(notes);

module.exports = router;