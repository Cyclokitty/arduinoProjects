var five = require('johnny-five');
var lcd, board, button;
board = new five.Board();



function setMessage() {
  lcd.cursor(0, 0).clear().print('Magic 8ball!');
  lcd.cursor(1,0).print('Ask ur question.');
}

function buttonPress() {
  setMessage();
  button.on('press', function() {
    // lcd.clear().cursor(0, 0).print('Shame about that.')

    lcd.clear().print("That's a shame.");
    console.log('clicky');


  });
}

board.on('ready', function() {
  lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
  });




  button = new five.Button(2);

  buttonPress();



  this.repl.inject({
    lcd: lcd,
    button: button
  });

});
