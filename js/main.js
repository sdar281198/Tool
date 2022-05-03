//Servicios empresariales
$(function(){
  $(".card1").append("<figcaption>");
  $(".card1 figcaption").append("<a href='serviciosemp.html#servicio4'><img src='iconos/iconos/press.svg' alt=''></a>");

  $(".card1").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".card1").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".card2").append("<figcaption>");
$(".card2 figcaption").append("<a href='serviciosemp.html#electricidad'><img src='iconos/iconos/electrical-tower.svg' alt=''></a>");

$(".card2").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card2").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card3").append("<figcaption>");
$(".card3 figcaption").append("<a href='serviciosemp.html#servicio6'><img src='iconos/iconos/drill.svg' alt=''></a>");

$(".card3").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card3").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card4").append("<figcaption>");
$(".card4 figcaption").append("<a href='serviciosemp.html#servicio3'><img src='iconos/iconos/air-conditioner.svg' alt=''></a>");

$(".card4").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card4").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card5").append("<figcaption>");
$(".card5 figcaption").append("<a href='serviciosemp.html#servicio7'><img src='iconos/iconos/paint-bucket.svg' alt=''></a>");

$(".card5").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card5").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card6").append("<figcaption>");
$(".card6 figcaption").append("<a href='serviciosemp.html#gasfiteria'><img src='iconos/iconos/pipeline.svg' alt=''></a>");

$(".card6").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card6").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card7").append("<figcaption>");
$(".card7 figcaption").append("<a href='serviciosemp.html#servicio2'><img src='iconos/iconos/detergent.svg' alt=''></a>");

$(".card7").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card7").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card8").append("<figcaption>");
$(".card8 figcaption").append("<a href='serviciosemp.html#servicio5'><img src='iconos/iconos/saw.svg' alt=''></a>");

$(".card8").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card8").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card9").append("<figcaption>");
$(".card9 figcaption").append("<a href='serviciosd.html#servicio2d'><img src='iconos/iconos/deal.svg' alt=''></a>");

$(".card9").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card9").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
});

$("#arriba").click(function(){
        $("html, body").animate({scrollTop: 0},1000)
        //$("html, body").animate({scrollTop: 0})
    });
    $(window).scroll(function(){
        //document.title = window.scrollY;
        if(window.scrollY>2700){
            $("#arriba").fadeIn("slow");
        }
        else{
            $("#arriba").fadeOut("slow");
        }
    });



});




//Servicios Domesticos
//S  $(".card2").append("<figcaption>");
$(".card2-d").append("<figcaption>");
$(".card2-d figcaption").append("<a href='serviciosd.html#servicio3d'><img src='iconos/iconos/electrical-tower.svg' alt=''></a>");

$(".card2-d").mouseenter(function(){
$(this).find("figcaption").stop().slideDown("slow",function(){
  $(this).css("display","flex");
  $(this).find("img").fadeIn("slow");
})
$(".card2-d").mouseleave(function(){
$(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card3-d").append("<figcaption>");
$(".card3-d figcaption").append("<a href='serviciosd.html#servicio5d'><img src='iconos/iconos/drill.svg' alt=''></a>");

$(".card3-d").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card3-d").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card5-d").append("<figcaption>");
$(".card5-d figcaption").append("<a href='serviciosd.html#servicio4d'><img src='iconos/iconos/paint-bucket.svg' alt=''></a>");

$(".card5-d").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card5-d").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card6-d").append("<figcaption>");
$(".card6-d figcaption").append("<a href='serviciosd.html#servicio1d'><img src='iconos/iconos/pipeline.svg' alt=''></a>");

$(".card6-d").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card6-d").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})
$(".card8-d").append("<figcaption>");
$(".card8-d figcaption").append("<a href='serviciosd.html#servicio6d'><img src='iconos/iconos/saw.svg' alt=''></a>");

$(".card8-d").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("img").fadeIn("slow");
  })
$(".card8-d").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
})






/*
$(".card").mouseenter(function(){
  $(this).find("figcaption").stop().slideDown("slow",function(){
    $(this).css("display","flex");
    $(this).find("i").fadeIn("slow");
  });
});
$(".card").mouseleave(function(){
  $(this).find("figcaption").stop().slideUp("slow");
})
*/
