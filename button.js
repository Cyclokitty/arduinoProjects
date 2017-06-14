var five = require('johnny-five');

var board = new five.Board();

var lcd;

board.on('ready', function() {
  var button = new five.Button(2);
  button.on('press', function() {
    console.log('button pressed');
  });

  lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
  });

});
