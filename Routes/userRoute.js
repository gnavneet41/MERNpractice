const express = require('express');
const router = express.Router();

const {su,login} = require('../Controllers/userController.js');

router.post('/signup',su);
router.get('/login',login);

module.exports = {router};