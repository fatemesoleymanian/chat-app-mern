import express, { Router } from 'express';
const router: Router = express.Router()

const { register, login } = require('../controller/AuthController');
const AuthMiddleware = require('../middleware/AuthenticationMiddleware')

router.post('/auth/login', AuthMiddleware, login);
router.post('/auth/register', AuthMiddleware, register);

module.exports = router;