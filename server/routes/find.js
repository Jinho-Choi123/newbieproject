var express = require('express');
var router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');


router.get('/', (req, res, next)=>{
    res.status(200);
})