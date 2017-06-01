var five = require('johnny-five');

five.Board().on('ready', function() {
  // initialize the RGB led
  var led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // add led to REPL (optional)
  this.repl.inject({
    led: led
  });

  // turn it on and set ht einital color
  led.on();
  led.color('#0000ff');

  led.blink(1000);

});
