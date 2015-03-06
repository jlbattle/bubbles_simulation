/*
This simulator should:

-play sound effects:
--when bubble is released
--general bg music

-allow user to move bubble gun around the left screen edge and aim it

-bubbles should not overlap (collision detection)

-user can clear off the screen by clicking a button

-game automatically resets when the screen gets too full


*/

var canvas;		//the canvas
var context;	//for drawing on canvas


canvas = document.getElementById("game-canvas");
context = canvas.getContext("2d");