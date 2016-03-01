'use strict'
/* global _, io, window, hexToRgb */
const socket = io.connect(window.location.origin)

const ledboton = document.getElementById('led')

const debounceClick = function (event){

	console.log(socket.emit('click',1))
}

ledboton.addEventListener('click',debounceClick)
