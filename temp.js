var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var tempSensor = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });

  tempSensor.on('data', function() {
    console.log(this.celsius + 'C');
  });

});
