$(document).ready(function(){
	$('#mainNavBar > ul > li').click(function(){
		$(this).parent().children().removeClass('active')
        $(this).addClass('active')
	});
});