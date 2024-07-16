const express = require('express');
//const { route, get } = require('../../app');

const router = express.Router();

router.get('/',function (req,res) {
    res.send('clientes ok')
});

module.exports = router;