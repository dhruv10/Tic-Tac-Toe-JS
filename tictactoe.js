var canvas;
var context;
var height;
var width;




function drawBoard(){

	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth = 4;

	var vLine1 = Math.round(width/3);
	var vLine2 = Math.round(vLine1*2);

	var hLine1 = Math.round(height/3);
	var hLine2 = Math.round(hLine1*2);

	context.moveTo(vLine1,0);
	context.lineTo(vLine1,height);

	
	context.moveTo(vLine2,0);
	context.lineTo(vLine2,height);

    context.moveTo(0,hLine1);
    context.lineTo(width,hLine1);

    
    context.moveTo(0,hLine2);
    context.lineTo(width,hLine2);

    context.stroke();
    context.closePath();

} 



function init(canvasID){

	canvas = document.getElementById(canvasID);
	context = canvas.getContext('2d');

	width = canvas.width;
	height = canvas.height;

	drawBoard();
}