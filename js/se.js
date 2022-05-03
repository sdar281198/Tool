$(function(){
  $(".servicio1").append("<figcaption>");
  $(".servicio1 figcaption").append("<img src='sintexto/gasfiteria.png' alt=''>");

  $(".servicio1").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio1").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio2").append("<figcaption>");
  $(".servicio2 figcaption").append("<img src='sintexto/controldeplagas.png' alt=''>");

  $(".servicio2").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio2").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio3").append("<figcaption>");
  $(".servicio3 figcaption").append("<img src='sintexto/aireacondicionado.png' alt=''>");

  $(".servicio3").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio3").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio4").append("<figcaption>");
  $(".servicio4 figcaption").append("<img src='sintexto/fibradevidrio.png' alt=''>");

  $(".servicio4").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio4").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio5").append("<figcaption>");
  $(".servicio5 figcaption").append("<img src='sintexto/carpinteria.png' alt=''>");

  $(".servicio5").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio5").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio6").append("<figcaption>");
  $(".servicio6 figcaption").append("<img src='sintexto/drywall melamina.jpg' alt=''>");

  $(".servicio6").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio6").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio7").append("<figcaption>");
  $(".servicio7 figcaption").append("<img src='sintexto/pintura.png' alt=''>");

  $(".servicio7").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio7").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio8").append("<figcaption>");
  $(".servicio8 figcaption").append("<img src='sintexto/sistemaelectrico.png' alt=''>");

  $(".servicio8").mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    $(".servicio8").mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  $(".servicio figcaption").append("<a href='contactenos.php'><input type='button' name='' value='Contacto'></a>")


})
$("#arriba").click(function(){
        $("html, body").animate({scrollTop: 0},1000)
        //$("html, body").animate({scrollTop: 0})
    });
    $(window).scroll(function(){
        //document.title = window.scrollY;
        if(window.scrollY>1400){
            $("#arriba").fadeIn("slow");
        }
        else{
            $("#arriba").fadeOut("slow");
        }
    });
