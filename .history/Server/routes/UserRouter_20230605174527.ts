import express, { Router } from 'express';
const router:Router = express.Router()

const { register, login } = require('../controller/AuthController');

router.post('/auth/login', login);
router.post('/auth/register', register);

module.exports = router;