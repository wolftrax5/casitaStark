'use strict'
const onStartSocket = (devices, socket) => {

  socket.on('click',function(value) {

  	devices.leds[value].toggle();

  	devices.lm35.on("data", function() {

    	 if (this.celsius > 100) {
    	 	console.log("si:" + this.celsius)
    	 	devices.motor.start();
    	 }else{
    	 	console.log('no:' + this.celsius);
    	 	devices.motor.stop();
    	 }
  	});
  	//devices.photo.on("data", function() {
    //		console.log(devices.photo.value);
 	//});
  	
  })
}

module.exports = onStartSocket