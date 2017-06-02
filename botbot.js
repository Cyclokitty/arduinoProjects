'use strict';

var five = require('johnny-five');
var keypress = require('keypress');
var board = new five.Board();

board.on('ready', function() {
  console.log('Botbot loves you!');
  console.log('Control Botbot with arrow keys and space to stop.');

  var leftWheel = new five.Servo({
    pin: 9,
    type: 'continuous'
  }).stop();
  var rightWheel = new five.Servo({
    pin: 10,
    type: 'continuous'
  }).stop();

  keypress(process.stdin);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.setRawMode(true);
  process.stdin.on('keypress', function(ch, key) {
    if (!key) {return;}

    if (key.name === 'q') {
      console.log('Quitting time.');
      process.exit();
    } else if (key.name === 'up') {
      console.log('Forward, ho');
      leftWheel.ccw();
      rightWheel.cw();
    } else if (key.name === 'down') {
      console.log('Backwards we go!');
      leftWheel.cw();
      rightWheel.ccw();
    } else if (key.name == 'left') {
      console.log('Starboard!');
      leftWheel.ccw();
      rightWheel.ccw();
    } else if (key.name === 'right') {
      console.log('Port!');
      leftWheel.cw();
      rightWheel.cw();
    } else if (key.name === 'space') {
      console.log('Stopping!');
      leftWheel.stop();
      rightWheel.stop();
    }
  });
});
