'use strict'
const onStartSocket = (devices, socket) => {

  socket.on('click',function(value) {
	


if ( value.indexOf('PUERTA') == -1 )  {
  	devices.leds[value].toggle();

  }else{
  		// Set horn to 90 degrees
  		var open = value.substring(value.length-1, value.length);
  	console.log(open)
  	
  	if (open == 0 ){
		devices.servo.to(90,5000);
		
	}else{
		devices.servo.to(0,5000);
		
	}	

  }

  	// devices.lm35.on("data", function() {

   //  	 // if (this.celsius > 100) {
   //  	 // 	console.log("si:" + this.celsius)
   //  	 // 	devices.motor.start();
   //  	 // }else{
   //  	 // 	console.log('no:' + this.celsius);
   //  	 // 	devices.motor.stop();
   //  	 // }
  	// });
  	//devices.photo.on("data", function() {
    //		console.log(devices.photo.value);
 	//});

  })
}

module.exports = onStartSocket