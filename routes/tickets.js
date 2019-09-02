const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtlr.new);

router.post('/flights/:id/tickets', ticketCtlr.create);


module.exports = router;