var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navB").style.top = "0";
  } else {
    document.getElementById("navB").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}