const router = require('express').Router();
const passport = require('passport');
const {RegisterClient, GetClients} = require('../Controllers/ClientController');
const {VerifyToken} = require('../middlewares/authToken');
router.get('/clients',VerifyToken,GetClients);
router.post('/register',VerifyToken,RegisterClient);
module.exports = router;