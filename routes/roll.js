var express = require('express');
var os = require('os');
var router = express.Router();

/* handle GET request */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dice' });
});


/* handle POST request*/
router.post('/', function(req, res) {
    var num_dice = req.body.num_of_dice;
    var dice_size = req.body.dice_size;

    //input validation (for now)
    if(isNaN(num_dice)){
      res.render('index', {title: 'Dice Night', results: 'Please enter a number!'});
    }

    var result = '';

    //roll the dice using node.js random library
    for(i = 0; i < num_dice; i++){
      var randNum = Math.floor(Math.random() * Math.floor(dice_size))+1;

      if (i < num_dice-1)
        result = result + randNum + ' | ';
      else
        result = result + randNum;

      if (i % 75 == 0)
        result = result + os.EOL;
    }
    res.render('index', {title: 'Dice Night', results: result});
  });

  module.exports = router;