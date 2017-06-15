// get a welcome message from magic8ball
// ask your question and press the button
// get back a response

var five = require('johnny-five');
var click = require('./button');
var lcd, board, button;
board = new five.Board();

board.on('ready', function() {
  // initialize lcd
  lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
  });

  // initialize button
  button = new five.Button({
    pin: 2,
    // isPullUp initializes the button with a reset
    isPullup: true
  });

  // opening message
  lcd.cursor(0, 0).clear().print('Magic 8ball!');
  lcd.cursor(1,0).print('Ask ur question.');

  button.on('press', function() {
    // this function runs random message function
    var answer = click.buttonPress();

    lcd.clear().cursor(0, 0).print(answer);
    lcd.cursor(1, 0).print('Ask & click.')
    console.log(answer);
  });

  this.repl.inject({
    lcd: lcd,
    button: button
  });

});
