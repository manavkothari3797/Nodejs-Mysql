const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const Auth = require('../util/util/Auth');

router.post('/login', Auth.login);
router.get('/logout', Auth.logout);
router.use(Auth.checkToken);
router.post('/', adminController.signUp);

module.exports = router;
