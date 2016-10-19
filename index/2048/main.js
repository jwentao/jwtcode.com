var board = new Array();
var score = 0;

$(function(){
	newGame();
});

function newGame(){
	//init棋盘格
	init();
	//随机生成数字
	generateOneNumber();
	generateOneNumber();
}

function init(){
	for(var i =0; i < 4; i++){
		for(var j =0; j < 4; j++){
			var gridCell = $("#grid-cell-"+i+"-"+j);
			gridCell.css('top',getPosTop(i,j));
			gridCell.css('left',getPosLeft(i,j));
		}
	}
	for(var i =0; i < 4; i++){
		board[i] = new Array();
		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
		}
	}
	updateBoardView();
}

function updateBoardView(){
	$(".number-cell").remove();
	for(var i =0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>')
			var theNumberCell = $('#number-cell-'+i+'-'+j);
			if(board[i][j] == 0){
				theNumberCell.css('width','0px');
				theNumberCell.css('height','0px');
				theNumberCell.css('top',getPosTop(i,j)+50);
				theNumberCell.css('left',getPosLeft(i,j)+50);
			}else{
				theNumberCell.css('width','100px');
				theNumberCell.css('height','100px');
				theNumberCell.css('top',getPosTop(i,j));
				theNumberCell.css('left',getPosLeft(i,j));
				theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color',getNumberColor(board[i][j]));
			}
		}
	}
}

function generateOneNumber(){
	if(noSpace(board)){
		return false;
	}
	//随机位置
	var randx = parseInt(Math.floor(Math.random() * 4));
	var randy = parseInt(Math.floor(Math.random() * 4));
	while(true){
		if(board[randx][randy] == 0){
			break;
			var randx = parseInt(Math.floor(Math.random() * 4));
			var randy = parseInt(Math.floor(Math.random() * 4));
		}
	}
	//随机生成一个数字
	var randNum = Math.random()<0.5?2:4;
	//随机位置上显示随机数字
	board[randx][randy] = randNum;
	showNumberWithAnimation(randx,randy,rendNum);
	return true;
}
