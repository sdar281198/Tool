$(function(){
  var servicio1 = $(".servicio1d");
  servicio1.append("<figcaption>");
  $(".servicio1d figcaption").append("<img src='sintexto/gasfiteria.png' alt=''>");

  servicio1.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio1.mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  var servicio2 = $(".servicio2d");
  servicio2.append("<figcaption>");
  $(".servicio2d figcaption").append("<img src='sintexto/cerrajeria.png' alt=''>");

  servicio2.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio2.mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  var servicio3 = $(".servicio3d");
  servicio3.append("<figcaption>");
  $(".servicio3d figcaption").append("<img src='sintexto/sistemaelectrico.png' alt=''>");

  servicio3.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio3.mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  var servicio4 = $(".servicio4d");
  servicio4.append("<figcaption>");
  $(".servicio4d figcaption").append("<img src='sintexto/pintura.png' alt=''>");

  servicio4.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio4.mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  var servicio5 = $(".servicio5d");
  servicio5.append("<figcaption>");
  $(".servicio5d figcaption").append("<img src='sintexto/drywall melamina.jpg' alt=''>");

  servicio5.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio5.mouseleave(function(){
      $(this).find("figcaption").stop().slideUp("slow");
    });
  });
  var servicio6 = $(".servicio6d");
  servicio6.append("<figcaption>");
  $(".servicio6d figcaption").append("<img src='sintexto/carpinteria.png' alt=''>");

  servicio6.mouseenter(function(){
    $(this).find("figcaption").stop().slideDown("slow",function(){
      $(this).css("display","flex");
      $(this).find("img").fadeIn("slow");
    })
    servicio6.mouseleave(function(){
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
