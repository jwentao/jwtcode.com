var canvasWidth = 802;
var canvasHeight = 497;

var can = document.getElementById("can");
var ctx = can.getContext("2d");

can.width = canvasWidth;
can.height = canvasHeight;

var image = new Image();
var radius = 50;	
var clippingRegion = {x:400,y:200,r:radius};

image.src = "../images/aixin2.jpg";
image.onload = function(e){
	initCanvas();
}
function initCanvas(){
	clippingRegion = {x:Math.random()*(canvasWidth-2*radius)+radius,y:Math.random()*(canvasHeight-2*radius)+radius,r:radius};
	draw(image,clippingRegion);
}
function draw(image,clippingRegion){
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	ctx.save();
	setClippingRegion(clippingRegion);
	ctx.drawImage(image,0,0);
	ctx.restore();
}
function setClippingRegion(clippingRegion){
	ctx.beginPath();
	ctx.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,2*Math.PI,true);
	ctx.clip();
}
function reset(){
	initCanvas();
}
function show(){
	clippingRegion.r = 10000;
	draw(image,clippingRegion);
}
