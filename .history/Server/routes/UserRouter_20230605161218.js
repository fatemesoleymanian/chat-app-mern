const express = require('express')
const router = express.Router()

const { register, login } = require('../controller/AuthController');

router.post('/auth/login', login);
router.post('/auth/register', register);

module.exports = router;