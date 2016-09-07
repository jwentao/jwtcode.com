var waveObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}

waveObj.prototype.num=10;
waveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
	}
}

waveObj.prototype.draw=function(){
	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			//draw
			this.r[i]+=deltaTime*0.04;
			var alpha=1-this.r[i]/50;
			if(this.r[i]>50){
				this.alive[i]=false;
			}
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";//设置画的样式
			
			ctx1.stroke();//开始画
			//console.log(this.x[i]);
		}
	}
	ctx1.restore();
}

waveObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			//born
			//console.log("born");
			this.alive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}
