const express = require('express');
const router = express.Router();
const path = require("path");
const redis = require('redis');
const client = redis.createClient('redis://127.0.0.1:6379');
var async = require('async');



// const redis = require('../app').redisclient;

router.get('/', (req, res) => {
    var jobs = [];
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);
        if(keys){
            async.map(keys, function(key, cb) {
               client.get(key, function (error, value) {
                    if (error) return cb(error);
                    var job = {};
                    job['ip']=key;
                    job['hostname']=value;
                    cb(null, job);
                }); 
            }, function (error, results) {
               if (error) return console.log(error);
                    jobs.push(results);
            });
        }
    });
    res.io.emit('Status',jobs);
    res.sendFile(path.join(__dirname + '/../public/html/clients.html'));
});


router.post('/', (req, res) => {
    // let id = req.params.id
    // console.log("Clients reqpest " + id);
    // res.send("Client 1");
    
    console.log(req.body);
    res.io.emit('Clients', req.body);
   
    req.redis.setex(req.body.ip,2,req.body.hostname);

    return res.json({success:'Client Online',status: 200})
});



module.exports = router;
