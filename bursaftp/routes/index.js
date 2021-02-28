const express = require('express');
const router = express.Router();
const path = require("path");

/* GET home page. */
router.get('/', (req, res, next) => {
  path.join(__dirname + '/../public/html/home.html');
  res.sendFile(path.join(__dirname + '/../public/html/home.html'))
});

// router.get('/users', (request, response) => {

//   response.send("USers");

// });

// router.get('/users/id', (request, response) => {

//   response.send("USers");

// });



module.exports = router;