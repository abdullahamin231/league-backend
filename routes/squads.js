var express = require('express');
var router = express.Router();
const squadModal = require("../models/squadModal.js");


router.get('/', async function (req, res, next) {
    const data = await squadModal.find({});
    return res.json(data);
});

router.get('/search', async function(req, res, next){
    
    let query = {}

    if(req.query.name){
        query.name = req.query.name
    }

    const data = await squadModal.find(query);
    return res.json(data);
})


module.exports = router;
