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
    adaptiveHeight: true,
    autoplay: false,
    dots: true,
    slidesToScroll: 2,
    slidesToShow: 2,


  });



  $("#camera_menu_click").click(function() {
    $("div.nav-row").fadeOut(450, function() {
      $("#menu_display").fadeIn(450);
    });
  });


  $("#menu_close").click(function() {
    $("#menu_display").fadeOut(450, function() {
      $("div.nav-row").fadeIn(450);
    });
  });

});
