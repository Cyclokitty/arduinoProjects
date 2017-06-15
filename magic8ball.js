var five = require('johnny-five');
var lcd, board, button;
board = new five.Board();

// get a welcome message from magic8ball
// ask your question and press the button
// get back a response



function setMessage() {
  lcd.cursor(0, 0).clear().print('Magic 8ball!');
  lcd.cursor(1,0).print('Ask ur question.');
}

function buttonPress() {
  setMessage();
  button.on('press', function() {
    // lcd.clear().cursor(0, 0).print('Shame about that.')
    var responses = ["That's a shame", "Nope. Nope. Nope", "Ok", "Bad Luck.", "Ask later", "Yes", "No chance.", "pffft ... no", "Well, alright", "Too drunk to know", "Too dim to know"];

    var num = Math.floor(Math.random() * (responses.length));

    var answer = responses[num];
    lcd.clear().print(answer);
    console.log(answer);
  });
}

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
    isPullup: true
  });

  // this function runs the welcome screen and random message function
  buttonPress();

  this.repl.inject({
    lcd: lcd,
    button: button
  });

});
