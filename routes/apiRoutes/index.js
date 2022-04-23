const path = require('path');
const fs =require('fs');

const id = [];

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
};)

module.exports = router;