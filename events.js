'use strict'
const onStartSocket = (devices, socket) => {

  socket.on('click',function() {
  	devices.led.toggle();

  	// devices.lm35.on("data", function() {
   //  	console.log(this.celsius + "°C", this.fahrenheit + "°F");
  	// });
  	
  })
}

module.exports = onStartSocket