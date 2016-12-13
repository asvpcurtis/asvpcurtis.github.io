$(document).ready(function(){
	$('#mainNavBar > ul > li').click(function(){
		if (!$(this).hasClass('dropdown'))
		{
			$(this).parent().children().removeClass('active')
			$(this).addClass('active')
			$('#swapable').hide();
		}
	});
	$('.copy').text('Copyright © ' + new Date().getFullYear() + ' Curtis Barlow-Wilkes')
});
$(function() {
    $("#mainNavBar").tabs({
      beforeLoad: function( event, ui ) {
        ui.jqXHR.fail(function() {
          ui.panel.html(
            "Couldn't load this tab. We'll try to fix this as soon as possible. " +
            "If this wouldn't be a demo." );
        });
      }
    });
  });