(function () {
  // window.onload = function() {
  //     // Loads Navbar + Footer HTML
  //     $( ".navbar_container" ).fadeOut(0).fadeIn().load( "../navbar.html" );
  //     $( ".footer" ).load( "../footer.html" );
  //     window.setTimeout(function () {
  //        $("#loading_screen").fadeTo("slow", 0, function(){
  //           $(this).css("display", "none");
  //        });
  //        $(".sk-cube-grid").css("opacity", 0);
  //     //    $('body').css("overflow-y", "scroll");
  //    }, 1200);

  //     setTimeout(function(){
  //         initEventListeners();
  //     }, 100);

  //     if ($(window).width() > 500) {
  //         desktopListeners();
  //     } else {
  //         mobileListeners();
  //     }
  // }

  window.onresize = function () {
    if ($(window).width() > 500) {
      desktopListeners();
    } else {
      // mobileListeners();
    }
  };

  window.onscroll = function () {
    // Shrink/Expand navbar height
    if ($(document).scrollTop() > /*$("#projects_container").offset()["top"] -*/ 80) {
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

  function initialAnimations() {
    $("#name").delay(200).animate(
      {
        "margin-top": "0px",
        opacity: "1",
      },
      {
        duration: 1000,
      }
    );

    // facts animations
    factInitAnimation("#fact1", 800, false);
    factInitAnimation("#fact2", 1200, true);
    factInitAnimation("#fact3", 1600, true);

    // Rest of page animations
    $("#greeting").stop(true, true).delay(2300).animate(
      {
        opacity: "1",
      },
      1000
    );

    $("#contact_info").stop(true, true).delay(2300).animate(
      {
        opacity: "1",
      },
      1000
    );

    $("#arrow").stop(true, true).delay(2300).animate(
      {
        opacity: "0.6",
      },
      1000
    );
  }

  // Initial animation for .facts. >Float in from the left<
  function factInitAnimation(selector, delay, isLink) {
    $(selector).delay(delay).animate(
      {
        "margin-left": "0px",
        opacity: "1",
      },
      1000
    );
  }

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

  function desktopListeners() {
    $(".project_item_container").hover(
      function () {
        $(this).find(".label").css({ left: "-8%", opacity: 1 });
      },
      function () {
        $(this).find(".label").css({ left: "-13%", opacity: 0 });
      }
    );
  }

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
