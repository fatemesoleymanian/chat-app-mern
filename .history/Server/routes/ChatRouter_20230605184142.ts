import express, { Router } from 'express';
const router: Router = express.Router();
const { index } = require('../controller/ChatController')


router.get('/',  index)


module.exports = router;