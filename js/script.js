$(document).ready(function(){
	$('#mainNavBar > ul > li').click(function(){
		if (!$(this).hasClass('dropdown'))
		{
			$(this).parent().children().removeClass('active')
			$(this).addClass('active')
		}
	});
	$('.copy').text('Copyright © ' + new Date().getFullYear() + ' Curtis Barlow-Wilkes')
});
