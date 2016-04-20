'use strict'
/* global _, io, window, hexToRgb */
const socket = io.connect(window.location.origin)

const leds = document.querySelectorAll(".led");
const text = document.getElementById('brightness');

const debounceClick = function (event){

	socket.emit('click',event.target.value,event.target.data_open)
}
const debounceText = function(event){
	socket.emit('brightness',event.target.value);
	console.log(event.target.value);
}

function addEvent (){
	for (var i = 0; i < leds.length; i++) 
	    leds[i].addEventListener('click',debounceClick)
	
}

function changePu (event){
	console.log(event.target.value);
		
	if (event.target.value != 'PUERTA1') {
		event.target.value = 'PUERTA1';	
	}else{
		event.target.value = 'PUERTA0';

	}
}

addEvent();

text.focus()
text.addEventListener('input', debounceText)
