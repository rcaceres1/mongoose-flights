const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

router.get('/', flightCtlr.index); 

router.get('/new', flightCtlr.new);

router.post('/', flightCtlr.create);

router.get('/:id', flightCtlr.show);

router.post('/:id/destinations', flightCtlr.addDestination);

module.exports = router;