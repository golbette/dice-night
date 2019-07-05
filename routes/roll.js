var express = require('express');
var router = express.Router();

/* handle GET request */
router.get('/', function(req, res) {
  res.render('index', { title: 'Dice' });
});


/* handle POST request*/
router.post('/', function(req, res) {
    var num_dice = req.body.num_of_dice;
    var dice_size = req.body.dice_size;

    //lazy baby input validation for lazy babies
    if(isNaN(num_dice)){
      res.send("bro you just POSTed invalid input! you are going to loose result!");
    }

    var result = '';

    //ROLL 'EM
    for(i = 0; i < num_dice; i++){
      var randNum = Math.floor(Math.random() * Math.floor(dice_size))+1;

      if (i < num_dice-1)
        result = result + randNum + ',';
      else
        result = result + randNum;
    }
    res.send(result);
  });

  module.exports = router;