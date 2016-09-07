var fruitObj=function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.aneNO=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneNO[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		this.fruitType[i]="";
		//this.born(i);
	}
	this.blue.src="src/blue.png";
	this.orange.src="src/fruit.png";
}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			console.log(this.alive[i]);
			var pic;
			if(this.fruitType[i]=="blue"){
				pic=this.blue;
			}
			else{
				pic=this.orange;
			}
		if(this.l[i]<=14){
			//var NO = this.aneNO[i];
			//this.x[i]=ane.headx[NO];
			//this.y[i]=ane.heady[NO];
			//console.log(this.x[i]);
		this.l[i]+=this.spd[i]*deltaTime;
}else{
	this.y[i]-=this.spd[i]*7*deltaTime;
}
ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,
					this.l[i],this.l[i]);
		if(this.y[i]<10){
			this.alive[i]=false;
			
		}
		
	}
		}
}
fruitObj.prototype.born=function(i){
	
	//this.aneNO[i]=Math.floor(Math.random()*ane.num);
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.headx[aneID];
	this.y[i]=ane.heady[aneID];
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2){
	this.fruitType[i]="blue";//orange,blue
	}else{
		this.fruitType[i]="orange";
	}
}

fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}

function fruitMonitor(){
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num ++;
		}
	}
	if (num <= 14) {
		// debugger;
		sendFruit();
		return;
	}
}

function sendFruit(){
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
            fruit.born(i);
            return;
		}
	}
}
//fruitObj.prototype.update=function(){
//	var num=0;
//	for(var i=0;i<this.num;i++){
//		if(this.alive[i]) num++;
//	}
//}
