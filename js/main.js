$(document).ready(main());

function main(){
/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 50
  });
  
  /* smooth scrolling sections */
  $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
  });
  $('.doItButton').on("click", function(){
    window.location.href = "phaway.html";

  })
  $('.img-lados').animateCss('bounce');

}
