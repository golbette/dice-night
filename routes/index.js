var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dice' });
});

/* handles post requests? */
router.post('/', function(req, res) {
  res.send("POST sent");
});

module.exports = router;
