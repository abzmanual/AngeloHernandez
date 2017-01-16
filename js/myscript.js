
// extension:
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

function removeAllActiveClass(){
  $(".menu .nav .active").removeClass("active");
}

function getActiveSection(){
  var homePos = $('#home').offset().top - $(window).scrollTop(),
  aboutPos = $('#about').offset().top - $(window).scrollTop(),
  worksPos = $('#works').offset().top - $(window).scrollTop(),
  experiencePos = $('#experience').offset().top - $(window).scrollTop(),
  skillsPos = $('#skills').offset().top - $(window).scrollTop(),
  contactPos = $('#contact').offset().top - $(window).scrollTop();   

  $('.worksPos').html(worksPos);
  if(homePos < 100){
  	removeAllActiveClass();
  	$('li.home').addClass('active');
  }
  if(aboutPos < 100){  
  	removeAllActiveClass();
  	$('li.about').addClass('active');
  }
  if(worksPos < 100){  
  	removeAllActiveClass();
  	$('li.works').addClass('active');
  }
  if(experiencePos < 100){  
  	removeAllActiveClass();
  	$('li.experience').addClass('active');
  }
  if(skillsPos < 100){  
  	removeAllActiveClass();
  	$('li.skills').addClass('active');
  }
  if(contactPos < 100){  
  	removeAllActiveClass();
  	$('li.contact').addClass('active');
  }  
}

getActiveSection();
$(window).scrollEnd(function(){
    getActiveSection();
}, 80);


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//	  removeAllActiveClass();
//	  $(this).parent('li').addClass('active');
	  getActiveSection();
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});