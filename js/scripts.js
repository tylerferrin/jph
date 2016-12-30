


$(document).ready(function() {

  $(".index-wrap").backstretch([
    "img/back2.jpg",
    "img/back1.jpg",
    "img/back3.jpg",
    "img/back4.jpg",
    "img/back5.jpg"
  ], {
    duration: 5000,
    fade: 500
  });

  $(".people").slick({
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
  });



  $("#camera_menu_click").click(function() {
    $("#camera_menu_click").fadeOut(450, function() {
      $("#menu_display").fadeIn(function() {
      $("#menu_display").fadeIn(450);
      });
    });
  });


  $("#menu_close").click(function() {
    $("#menu_display").fadeOut(450, function() {
      $("#camera_menu_click").fadeIn(450);
    });
  });


  $(".loader").fadeOut(1000);

});
