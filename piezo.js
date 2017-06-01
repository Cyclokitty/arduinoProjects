var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  // creates a piezo object and defines the pin to be used fo the signal
  var piezo = new five.Piezo(3);

  // injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // plays a setEncoding
  piezo.play({
    // song is composed of an array of notes and note length
    tempo: 150, // Beats per minute, default 150
  song: [ // An array of notes that comprise the tune
    [ "c4", 1 ], // Each element is an array in which
                 // [0] is the note to play and
                 //[1] is the duration in "beats" (tempo, above)
    [ "e4", 2 ],
    [ "g4", 3 ],
    [ null, 4 ] // null indicates "no tone" for the beats indicated
  ]
  });



  });
