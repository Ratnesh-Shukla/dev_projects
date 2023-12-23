$(document).ready(function() {
	var docHeight = $('.sky').height(),
			docWidth = $('.sky').width(),
			heightMax = docHeight - 4,
			widthMax = docWidth - 4;
	
	for(var i=0; 40 >= i; i++){
		$('.sky').append('<div style="left:' + Math.floor( Math.random() * widthMax ) + 'px;top:' + Math.floor( Math.random() * heightMax ) + 'px" class="star '+ i +'"></div>');
	}
});