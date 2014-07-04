document.onload = function() {
  var logo = document.getElementById('logo');
}

window.onscroll = function (event) {
  if ((window.pageYOffset || document.documentElement.scrollTop) > 0) {
    logo.className = "sticky";
  } else {
    logo.className = "";
  }
}
