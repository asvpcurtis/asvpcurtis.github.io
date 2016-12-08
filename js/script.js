$(function(){
    $('.menu > ul > li').click(function() {
        alert(this.id);
    });
});

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});