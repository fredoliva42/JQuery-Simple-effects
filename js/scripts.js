$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideToggle();
  });

  $(".clickable2").click(function() {
    $(".secondary-showing").slideToggle();
    $(".secondary-hidden").slideToggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  })
});
