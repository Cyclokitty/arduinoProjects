var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo(10);

  this.repl.inject({
    servo: servo
  });

  servo.sweep();
})
