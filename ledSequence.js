var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var index = 0;
  var leds = new five.Leds([2, 3, 4, 5, 6, 7, 8, 9]);

  // making sequenced lights!!

  // problem .on() works with led not with the arrayed leds
  // in the interation, assign the iterated led to var led
  // the blink speed must be a number and to offset the blink speed for each led you multiply by 50 the interation value and add the result to 500ms
  
  this.loop(1000, function() {
    for (var i = 0; i < leds.length; i++) {
      var led = leds[i];
      var speed = 500 + (i * 50);
      led.blink(speed);
    }
  });

});
