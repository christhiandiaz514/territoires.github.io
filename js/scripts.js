document.onload = function() {
  var logo = document.getElementById('logo');
}

window.onscroll = function(event) {
  var windowOffset = window.pageYOffset || document.documentElement.scrollTop;
  if (windowOffset > 30) {
    logo.className = "sticky";
  } else {
    logo.className = "";
  }
  logo.style.backgroundPosition = "0 -" + Math.round(windowOffset / 2) + "px";
}
