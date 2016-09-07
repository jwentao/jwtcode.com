var momObj=function(){
	this.x;
	this.y;
	this.angle;
	//this.bigEye=new Image();
	//this.bigBody=new Image();
	//this.bigTail=new Image();
	
	this.momTailTimer=0;
	this.momTailCount=0;
	
	this.momEyeTimer=0;
	this.momEyeCount=0;
	this.momInterval=1000;
	
	this.momBodyCount=0;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	//this.bigEye.src="src/bigEye0.png";
	//this.bigBody.src="src/bigSwim0.png";
	//this.bigTail.src="src/bigTail0.png";
}
momObj.prototype.draw=function(){
	//lerp x,y  mom坐标趋向于mouse坐标
	//大鱼跟随鼠标动
	this.x =lerpDistance(mx,this.x,0.95);  //lerpDistance返回新坐标，mxy鼠标坐标，thisxy大鱼坐标，0.95速率
	this.y =lerpDistance(my,this.y,0.95);
	
	//计算delta angle（mom&mouse）
	//Math.atan2(y,x)
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//mom&mouse的夹角
	
	//lerp angle mom角度趋向于mouse
	this.angle=lerpAngle(beta,this.angle,0.6);
	
	this.momTailTimer+=deltaTime;
	if(this.momTailTimer>50){
		this.momTailCount=(this.momTailCount+1)%8;
		this.momTailTimer%=50;
	}
	//eye
	this.momEyeTimer+=deltaTime;
	if(this.momEyeTimer>this.momInterval){
		this.momEyeCount=(this.momEyeCount+1)%2;
		this.momEyeTimer%=this.momInterval;
		if(this.momEyeCount==0){
			this.momInterval=Math.random()*1500+2000;
			
		}else{
			this.momInterval=200;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);//大鱼头随鼠标摆动
	
	var momBodyCount=this.momBodyCount;
	if(data.double==1){
	ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);
	}
	
	var momTailCount=this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
	
	var momEyeCount=this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
	ctx1.restore();
}
