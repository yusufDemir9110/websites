$(document).ready(function () {
  $(".carousel").carousel({
    interval: 5000,
  });
});
if ($(window).innerWidth() <= 850) {
  $(".form1").mouseenter(function () {
    $(".form1").removeClass("rotate2");
    $(".form1").addClass("rotate3");
  });
  $(".form1").mouseleave(function () {
    $(".form1").removeClass("rotate3");
    $(".form1").addClass("rotate2");
  });
}
$("#altM1").mouseenter(function () {
  $("#altM11").animate({ opacity: "1" }, 200);
});
$("#altM1").mouseleave(function () {
  $("#altM11").animate({ opacity: "0" }, 200);
});
$("#altM2").mouseenter(function () {
  $("#altM21").animate({ opacity: "1" }, 200);
});
$("#altM2").mouseleave(function () {
  $("#altM21").animate({ opacity: "0" }, 200);
});
$("#altM3").mouseenter(function () {
  $("#altM31").animate({ opacity: "1" }, 200);
});
$("#altM3").mouseleave(function () {
  $("#altM31").animate({ opacity: "0" }, 200);
});
$("#altM4").mouseenter(function () {
  $("#altM41").animate({ opacity: "1" }, 200);
});
$("#altM4").mouseleave(function () {
  $("#altM41").animate({ opacity: "0" }, 200);
});
$("#altM5").mouseenter(function () {
  $("#altM51").animate({ opacity: "1" }, 200);
});
$("#altM5").mouseleave(function () {
  $("#altM51").animate({ opacity: "0" }, 200);
});
$("#altM6").mouseenter(function () {
  $("#altM61").animate({ opacity: "1" }, 200);
});
$("#altM6").mouseleave(function () {
  $("#altM61").animate({ opacity: "0" }, 200);
});
$("#altM7").mouseenter(function () {
  $("#altM71").animate({ opacity: "1" }, 200);
});
$("#altM7").mouseleave(function () {
  $("#altM71").animate({ opacity: "0" }, 200);
});
$("#altM8").mouseenter(function () {
  $("#altM81").animate({ opacity: "1" }, 200);
});
$("#altM8").mouseleave(function () {
  $("#altM81").animate({ opacity: "0" }, 200);
});
$("#altM9").mouseenter(function () {
  $("#altM91").animate({ opacity: "1" }, 200);
});
$("#altM9").mouseleave(function () {
  $("#altM91").animate({ opacity: "0" }, 200);
});

if ($(window).innerWidth() >= 520) {
  $("#car1").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg1.jpg)");
    $("#cover").css("display", "block");
  });

  $("#car2").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg2.jpg)");
    $("#cover").css("display", "block");
  });

  $("#car3").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg3.jpg)");
    $("#cover").css("display", "block");
  });

  $("#car4").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg4.jpg)");
    $("#cover").css("display", "block");
  });

  $("#car5").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg5.jpg)");
    $("#cover").css("display", "block");
  });

  $("#car6").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg6.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car7").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg7.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car8").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg8.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car9").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg9.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car10").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg10.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car11").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg11.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car12").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg12.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car13").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg13.jpg)");
    $("#cover").css("display", "block");
  });
  $("#car14").click(function () {
    $(".bigPicture").css("display", "block");
    $(".bigPicture").css("backgroundImage", "url(pg14.jpg)");
    $("#cover").css("display", "block");
  });

  $(".button2").click(function () {
    $(".bigPicture").css("display", "none");
    $("#cover").css("display", "inherit");
  });
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    $("#logo").css("background", "none");
    $(".a1").css("color", "black");

    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
    $(".a1").css("color", "white");
    $("#logo").css("background", "rgba(255,255,255,0.5)");
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    if ($(window).innerWidth() <= 850) {
      $(".contact").addClass("rotate4");
    } else {
      $(".contact").addClass("rotate");
    }

    $(".form1").addClass("rotate2");
    $(".form1").mouseenter(function () {
      $(".form1").removeClass("rotate2");
      $(".form1").addClass("rotate3");
    });
    $(".form1").mouseleave(function () {
      $(".form1").removeClass("rotate3");
      $(".form1").addClass("rotate2");
    });

    console.log("OK");
  } else {
    if ($(window).innerWidth() <= 850) {
      
      $(".form1").addClass("rotate2");
    } else {
      $(".contact").removeClass("rotate2");
    }
    $(".contact").removeClass("rotate");
    $(".form1").removeClass("rotate2");
  }
});
$("#projects").click(function () {
  $("html, body").animate({ scrollTop: 1500 }, "slow");
  return false;
});
$("#process").click(function () {
  $("html, body").animate({ scrollTop: 2100 }, "slow");
  return false;
});
$("#testimonials").click(function () {
  $("html, body").animate({ scrollTop: 2950 }, "slow");
  return false;
});
$("#contactUs").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

if (Modernizr.mq("(max-width: 850px)")) {
  $(".card").css("min-width", "300px");
}
