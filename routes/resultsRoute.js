const express = require('express');
const { getAllResults, getSingleResults } = require('../controllers/resultsController');

const router = express.Router()

router.get('/', getAllResults);
router.post('/single', getSingleResults);

module.exports = router;