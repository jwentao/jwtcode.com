var divContent;

var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic=new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];

var data;

var wave;
var halo;

var dust;
var dustPic=[];
document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	divContent=document.getElementById('allcanvas');
	console.log(divContent.offsetWidth);
	
	//获得canvas context
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");
	can1.width=divContent.offsetWidth;
	can2.width=divContent.offsetWidth;
	can1.height=divContent.offsetHeight;
	can2.height=divContent.offsetHeight;
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	
	ane=new aneObj(canWidth);
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	baby=new babyObj();
	baby.init();
	
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="src/babyTail"+i+".png";
	}
	for(i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="src/babyEye"+i+".png"
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image;
		babyBody[i].src="src/babyFade"+i+".png";
	}
	
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="src/bigTail"+i+".png";
	}
	
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="src/bigEye"+i+".png";
	}
	
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="src/bigSwim"+i+".png";
		momBodyBlue[i].src="src/bigSwimBlue"+i+".png";
	}
	
	data=new dataObj();
	ctx1.font="20px Verdana";
	ctx1.textAlign="center";//textAlign 默认left
	data.gameOver=false;
	
	wave=new waveObj();
	wave.init();
	
	halo=new haloObj();
	halo.init();
	
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="src/dust"+i+".png";
	}
	dust=new dustObj();
	dust.init();
	
	can1.onclick=function(){
		console.log("");
	}
	
}
function gameloop(){
	requestAnimationFrame(gameloop);
	//setTimeout(gameloop,20);
	var now=Date.now();
	deltaTime=now-lastTime;
	
	if(deltaTime>40){
		deltaTime=40;
	}
	
	lastTime=now;
	drawBackground();
	ane.draw();
	
	fruit.draw();
	fruitMonitor();
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	
	momFruitsCollision();
	momBabyCollision();
	
	baby.draw();
	
	data.draw();
	
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
	if(e.offsetX||e.layerX)
	{
		mx=e.offsetX==undefined ? e.layerX:e.offsetX;
		my=e.offsetY==undefined ? e.layerY:e.offsetY;
		//console.log("x"+mx); 
		//console.log("y"+my); 
	}
	}
}
