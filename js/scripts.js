$(document).ready(function() {

  $.backstretch([
    "img/backexample.jpg",
    "img/image1.jpg",
    "img/image2.jpg"
  ], {
    duration: 5000,
    fade: 500
    });

  $("#camera_menu_click").click(function() {
    $("#menu_display").toggle();
  });

  $("#menu_close").click(function() {
    $("#menu_display").toggle();
  });

});
