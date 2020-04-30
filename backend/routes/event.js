const express = require('express');
const router = express.Router();

const Event = require('../models/Event');

router.get('/events', (req, res, next) => {
    Event.find({}, (req, dat) => {
        if(err){
            console.log(err);
        }
        else{
            res.json({
                success: true,
                data: dat
            });
        }
    })
});

router.post('/add', (req, res, next) => {
    let even = req.body;
    Event.addEvent(even, (err, ev) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(ev);
            return res.json({success: true, msg: 'Account creation successfull.', data: ev});
        }
    });
});

module.exports = router;