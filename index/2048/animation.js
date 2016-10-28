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

function showMoveAnimation( fromx , fromy , tox, toy ){

    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
    numberCell.animate({
        top:getPosTop( tox , toy ),
        left:getPosLeft( tox , toy )
    },200);
}
