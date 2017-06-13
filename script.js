"use strict";

var x = 10;
var btn = $('#btn');
var txt = $('#test');

btn.click(function(){
		txt.css('font-size', x + 'px'); 
		x += 10;
	})