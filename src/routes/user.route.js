const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const Auth = require('../util/util/Auth');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

router.use(Auth.checkToken);
router.post('/upload', upload.single('users'), userController.upload);

module.exports = router;
