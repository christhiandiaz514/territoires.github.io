$(function() {
  var logo = document.getElementById('logo');
  
  // Quand on clique sur le logo en page d'accueil, scroll up au lieu de reload
  $('body.home #logo a').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
    return false;
  });
});

window.onscroll = function(event) {
  var windowOffset = window.pageYOffset || document.documentElement.scrollTop;
  if (windowOffset > 30) {
    logo.className = "sticky";
  } else {
    logo.className = "";
  }
  logo.style.backgroundPosition = "0 -" + Math.round(windowOffset / 4) + "px";
}
