const express = require('express');
const router = express.Router();
const adminRoutes = require('./admin.route');
const userRoutes = require('./user.route');

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

module.exports = router;
