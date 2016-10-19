function showNumberWithAnimation(i,j,rendNum){
	var numberCell = $("#number-cell-"+i+"-"+j);
	numberCell.css('background-color',getNumberBackgroundColor(rendNum));
	numberCell.css('color',getNumberColor(rendNum));
	numberCell.text(rendNum);
	
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},50);
}
