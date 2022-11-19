$(document).ready(function () {
  $("#checkbox").change(function () {
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideCount = $(".slide-practice .container .slider li").length;
  var slideWidth = $(".slide-practice .container .slider li").width();
  var slideHeight = $(".slide-practice .container .slider li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $(".slide-practice .container .slider").css({
    width: slideWidth,
    height: slideHeight,
  });

  $(".slide-practice .container .slider").css({
    width: sliderUlWidth,
    marginLeft: -slideWidth,
  });

  $(".slide-practice .container .slider li:last-child").prependTo(
    ".slide-practice .container .slider"
  );

  function moveLeft() {
    $(".slide-practice .container .slider").animate(
      {
        left: +slideWidth,
      },
      440,
      function () {
        $(".slide-practice .container .slider li:last-child").prependTo(
          ".slide-practice .container .slider"
        );
        $(".slide-practice .container .slider").css("left", "");
      }
    );
  }

  function moveRight() {
    $(".slide-practice .container .slider").animate(
      {
        left: -slideWidth,
      },
      440,
      function () {
        $(".slide-practice .container .slider li:first-child").appendTo(
          ".slide-practice .container .slider"
        );
        $(".slide-practice .container .slider").css("left", "");
      }
    );
  }

  $(".leftbtn").click(function () {
    moveLeft();
  });

  $(".rightbtn").click(function () {
    moveRight();
  });
});
