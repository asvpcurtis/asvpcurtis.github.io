
$(document).ready(function(){
  goHome();
	$('#mainNavBar > ul > li').click(function(){
		if (!$(this).hasClass('dropdown'))
		{
			$(this).parent().children().removeClass('active')
			$(this).addClass('active')
		}
    if ($(this).is('#home')) {goHome();}
    if ($(this).is('#projects')) {goProjects();}
	});
	$('.copy').text('Copyright © ' + new Date().getFullYear() + ' Curtis Barlow-Wilkes')
});

function goHome()
{
  $('.home-content').show()
  $('.projects-content').hide()
}
function goProjects()
{
  $('.home-content').hide()
  $('.projects-content').show()
}