const router = require('express').Router();
const passport = require('passport');
const {RegisterAdmin,LoginAdmin,VerifyToken} = require('../Controller/AdminController');
router.post('/register', RegisterAdmin);
router.post('/isAuthenticated', VerifyToken);
router.post('/login', passport.authenticate('local'), LoginAdmin);
module.exports = router;