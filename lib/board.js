'use strict'
const five = require("johnny-five"),
board = new five.Board();

function setup (callback) {
	board.on('ready', () => {
    	
    	let devices = {}  
      devices.led = new five.Led(13);
   		// devices.led = new five.Led(12);

   		devices.lm35 = new five.Thermometer({
    			controller: "LM35",
    			pin: "A0"
  			});

    	callback(null, devices)
  })
}
module.exports = setup
