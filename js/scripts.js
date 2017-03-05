$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $(".secondary-showing").slideToggle();
    $(".secondary-hidden").slideToggle();
  });
});
