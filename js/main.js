// No 300ms mobile delay on mobile
window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);


// Navigation drawer
$(document).ready(function() {
  $('.drawer').drawer();
});