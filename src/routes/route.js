const express = require('express');

const collegeController = require('../controllers/collegeController')
const internController = require('../controllers/internController')

const router = express.Router();

// College routes
router.post('/colleges', collegeController.createCollege)
router.get('/collegeDetails', collegeController.collegeDetails)

// Intern routes
router.post('/interns', internController.createIntern)


module.exports = router;
