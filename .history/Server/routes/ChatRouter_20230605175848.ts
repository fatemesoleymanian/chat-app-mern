import express, { Router } from 'express';
const router: Router = express.Router();
const { index } = require('../controller/ChatController')
const chatMiddleware = require('../middleware/ChatMiddleware')


router.get('/', chatMiddleware, index)


module.exports = router;