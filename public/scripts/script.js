(function () {
  // window.onresize = function () {
  //   if ($(window).width() > 500) {
  //     desktopListeners();
  //   } else {
  //     // mobileListeners();
  //   }
  // };

  window.onscroll = function () {
    // Shrink/Expand navbar height
    if ($(document).scrollTop() > 80) {
      // $(".navbar_container").css("top", "0");
      $(".navbar").css({ "padding-top": "20px", "padding-bottom": "20px" });
      $(".navbar_container").css({
        "box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)",
        "background-color": "white",
      });
    } else {
      // $(".navbar_container").css("top", "-200px");
      $(".navbar").css({ "padding-top": "30px", "padding-bottom": "30px" });
      $(".navbar_container").css({
        "box-shadow": "0 0 10px rgba(0, 0, 0, 0)",
        "background-color": "rgba(250, 250, 250, 0)",
      });
    }
  };

  function initEventListeners() {
    $(".fa-angle-down").click(function () {
      $("html, body").animate(
        {
          scrollTop: $(window).height() - $(".navbar").height(),
        },
        500
      );
    });

    // Navbar Listener
    $(".hamburger").click(function () {
      console.log("clicking!!!");
      if (!$(this).hasClass("is-active")) {
        $(this).addClass("is-active");
      } else {
        $(this).removeClass("is-active");
      }

      // Show menu
      if (parseInt($(".menu_container").css("left")) > 10) {
        $(".menu_container").css("left", "0");
      } else {
        $(".menu_container").css("left", "100vw");
      }

      $(".menu_item").click(function () {
        console.log($(this).find("a").html());
        if ($(this).find("a").html() == "Projects") {
          $(".menu_container").css("left", "100vw");
        }
      });
    });
  }

  console.log(
    "%c Hello, stranger",
    "font-size: 50px; text-transform: uppercase; color: white; text-shadow: 2px 2px red, 4px 4px orange, 6px 6px yellow, 8px 8px green, 10px 10px blue, 12px 12px purple;"
  );

  console.log(
    `%c
 ___________________________________
< Thanks for checking out my site! >
< Feel free to drop me a line      >
< at hello@eetueskelinen.com       >
 -----------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
    "font-family:monospace"
  );
})();

var scrolled = false;
$(window).on("scroll", function () {
  if (!scrolled) {
    scrolled = true;
    new WOW().init();
  }
});
