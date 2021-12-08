const express = require('express');

const collegeController = require('../controllers/collegeController')
const internController = require('../controllers/internController')

const router = express.Router();

// College routes
router.post('/colleges', collegeController.createCollege)
router.get('/collegeDetails', collegeController.collegeDetails)

// Intern routes
router.post('/interns', internController.createIntern)

// Netcore webhook test routes
router.post('/deliveryWebhook', function(req, res) {
    console.log(req)
    res.status(200).send()
})

router.post('/incomingWebhook', function(req, res) {
    console.log(req)
    res.status(200).send()
})

module.exports = router;
