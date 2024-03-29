var express = require('express');
var router = express.Router();
const playerModal = require("../models/player");


router.get('/', async function (req, res, next) {
    const data = await playerModal.find();
    return res.json(data);
});

router.get('/:fname/:lname', async function (req, res, next) {
    const data = await playerModal.find({"firstName":req.params.fname, "lastName":req.params.lname});
    return res.json(data);
})

router.get('/search', async function(req, res, next){
    console.log(req.query)
    let query = {}

    if(req.query.lastName){
        query.lastName = req.query.lastName
    }

    if(req.query.nation){
        query.nation = req.query.nation
    }

    if(req.query.position){
        query.position = req.query.position
    }

    if(req.query.squad){
        query.squad = req.query.squad
    }

    const data = await playerModal.find(query);
    return res.json(data);
})

module.exports = router;
