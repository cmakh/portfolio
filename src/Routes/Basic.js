const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send(require('../public/html/index.html'))
});

module.exports = router;