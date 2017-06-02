var five = require('johnny-five');
var board = new five.Board();
var click = 0;
board.on('ready', function() {
  var led = new five.Led(13);
  var button = new five.Button(2);

  board.repl.inject({
    led: led,
    button: button
  });

  button.on('press', function() {
    led.on();
    click++;
    console.log('click!' + click);
    led.off();
  });

});
