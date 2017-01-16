

$(document).ready(function(){
   $(window).bind('scroll', function() {
      var scrollTop = $(window).scrollTop();
      var elementOffset = $('works').offset().top;
      var currentElementOffset = (elementOffset - scrollTop);
	  $('.workoffset').innerHTML = currentElementOffset;
   });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  $(".menu .nav .active").removeClass('active');
	  $(this).parent('li').addClass('active');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});