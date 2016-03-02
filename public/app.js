'use strict'
/* global _, io, window, hexToRgb */
const socket = io.connect(window.location.origin)

const leds = document.querySelectorAll(".led")

const debounceClick = function (event){

	socket.emit('click',event.target.value)
}

function addEvent (){
	for (var i = 0; i < leds.length; i++) 
	    leds[i].addEventListener('click',debounceClick)
	
}

addEvent();

