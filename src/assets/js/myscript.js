/*$(document).ready(function () {
if($.cookie("css")) {
$("#MSS").attr("href",$.cookie("css"));
}
$(".defTheme").click(function() { 
alert("testing");
$("#MSS").attr("href",$(this).attr('href'));
$.cookie("css",$(this).attr('href'));
return false;
});		
$(".float-icons2 .fload-btn").click(function(){
  $(".float-icons 2ul").toggleClass("show");
});	
//$('table').wrap('<div class="table-responsive">');

}); 
*/

// ______________Full screen
	$("#fullscreen-button").on("click", function toggleFullScreen() {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    })


$(window).scroll(function () {
var height = $(window).scrollTop();
if (height > 20) {
$("header").addClass("menuFxd");
}
if (height < 20) {
$("header").removeClass("menuFxd");
}

});

jQuery(document).ready(function() {
var offset = 220;
var duration = 500;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});

jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
}); 

//	
//$(document).ready(function() {
//$('a').each(function(){
//if(location.href === this.href){
//$(this).addClass('selected');
//$('a').not(this).addClass('none');
//return false;
//}
//});
//});


8

$(window).load(function() {
   $('body').addClass('AsadKhan');
});	



