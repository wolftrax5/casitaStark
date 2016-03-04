'use strict'
const onStartSocket = (devices, socket) => {

  socket.on('click',function(value) {

  	devices.leds[value].toggle();

  	devices.lm35.on("data", function() {
    	 if (this.celsius > 27) {
    	 	console.log("mayor de 27")
    	 	devices.motor.start();
    	 }else{
    	 	devices.motor.stop();
    	 }
  	});
  	
  })
}

module.exports = onStartSocket