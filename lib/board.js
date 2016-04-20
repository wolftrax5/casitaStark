'use strict'
const five = require("johnny-five"),
board = new five.Board();

function setup (callback) {
	board.on('ready', function() {
    	
    	let devices = {}  
      // only need 3 leds
      devices.leds = new five.Leds([13,12,11]);
      
      this.pinMode(9, five.Pin.PWM);
      this.analogWrite(9, 255);
      
      devices.dany = new five.Led(9);
      
      
      devices.motor = new five.Motor(5);

   		
      devices.lm35 = new five.Thermometer({
    			controller: "LM35",
    			pin: "A0",
          freq:5000
  			});
     
      //devices.photo = new five.Sensor({
       // pin: "A1",
       // freq: 250
      //});
     devices.servo = new five.Servo({
                        pin: 10,
                        range: [0, 90]
                      });

    	callback(null, devices)
  })
}
module.exports = setup
