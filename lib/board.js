'use strict'
const five = require("johnny-five"),
board = new five.Board();

function setup (callback) {
	board.on('ready', () => {
    	
    	let devices = {}  
      devices.leds = new five.Leds([12,13,11,10,9]);
      
      devices.motor = new five.Motor(5);

   		devices.lm35 = new five.Thermometer({
    			controller: "LM35",
    			pin: "A0"
  			});

    	callback(null, devices)
  })
}
module.exports = setup
