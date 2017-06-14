var five = require('johnny-five');
var lcd, board;
board = new five.Board();


board.on('ready', function() {
  lcd = new five.LCD({
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20
  });
  var button = new five.Button(2);

  // tell the lcd yo will use these characters
  lcd.useChar('check');
  lcd.useChar('heart');
  lcd.useChar('duck');
  lcd.useChar('clock');

  // line 1
  lcd.clear().print('Cyclokitty!');
  lcd.cursor(1, 0);
  // line 2
  lcd.print('I :heart: arduino');

  this.wait(1000, function() {
    lcd.clear().cursor(0, 0).print("I :check::heart: 2 :clock: :)");
  });

  this.repl.inject({
    lcd: lcd
  });

});
