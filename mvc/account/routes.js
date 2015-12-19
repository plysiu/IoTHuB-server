'use strict';

var express = require('express'),

    controller = require('./controller'),
    router = express.Router();

router.get('/', controller.getAll);
router.get('/:_id', controller.getById);
router.post('/', controller.create);
//router.post('/login', controller.login);
//router.get('/logout', controller.logout);

module.exports = router;