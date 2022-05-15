$( document ).ready(function() {
  $( ".reading.toggle" ).click(function() {
    $( "#no_mess" ).toggleClass("none");
    $( "#mess" ).toggleClass("none");

    $( ".reading.buttons" ).toggleClass("off");
    $( ".reading.buttons" ).toggleClass("on");

    $(this).toggleClass("active");
    $(this).toggleClass("inactive");
  });

  $( ".writing.toggle" ).click(function() {
    $(".text-wrapper").toggleClass("writingon");
    $("#can").toggleClass("none");
    $(".lines").toggleClass("none");

    $( ".writing.buttons" ).toggleClass("off");
    $( ".writing.buttons" ).toggleClass("on");

    $(this).toggleClass("active");
    $(this).toggleClass("inactive");
  });

  $( ".coordination.toggle" ).click(function() {
    $(".no_t").toggleClass("none");
    $(".scene").toggleClass("none");

    $( ".coordination.buttons" ).toggleClass("off");
    $( ".coordination.buttons" ).toggleClass("on");

    $(this).toggleClass("active");
    $(this).toggleClass("inactive");
  });

  $(document).mousemove(function(event){
    let body_size_x = $( window ).width();
    let body_size_y = $( window ).height();
    let half_body_size_x = parseInt(body_size_x / 2);
    let half_body_size_y = parseInt(body_size_y / 2);
    let left_dir = event.pageX;
    let top_dir = event.pageY;

    let eq1 = left_dir < half_body_size_x;
    let eq2 = left_dir > half_body_size_x;
    let eq3 = top_dir < half_body_size_y;
    let eq4 = top_dir > half_body_size_y;

    const halfHeight = $(this).height()/2;
    const halfwidth = $(this).width()/2;
    let offSetY = -(event.pageY - halfHeight) /4;
    let offSetX = (event.pageX-halfwidth) / 3.8;

    if (eq1 && eq3) {
      $('.scene').css({'transform' : 'rotateX(' + offSetY + 'deg) rotateY(' + offSetX + 'deg)'});
    } else if (eq2 && eq3) {
      $('.scene').css({'transform' : 'rotateX(' + offSetY + 'deg) rotateY(' + (offSetX * - 2) + 'deg)'});
    } else if (eq1 && eq4) {
      $('.scene').css({'transform' : 'rotateX(' + (offSetY * - 2) + 'deg) rotateY(' + (offSetX * - 2) + 'deg)'});
    } else if (eq2 && eq4) {
      $('.scene').css({'transform' : 'rotateX(' + offSetY + 'deg) rotateY(' + offSetX + 'deg)'});
    }
  });

  $( ".memory.toggle" ).click(function() {
    $( ".average" ).toggleClass("none");
    $( ".clown" ).toggleClass("none");

    $( ".memory.buttons" ).toggleClass("off");
    $( ".memory.buttons" ).toggleClass("on");

    $(this).toggleClass("active");
    $(this).toggleClass("inactive");

    if($(".fading").is(":visible")){
      let fadingHeading = document.querySelectorAll('.fading');

      for (let a = 0; a < fadingHeading.length; a++){
        let letters = fadingHeading[a].textContent.split(' ');

        let content = letters.map((val, i) => {
            let delay = Math.floor((Math.random() * 20000) + 1);
            return ('<span style="animation-delay: '+ delay + 'ms">'+ val +'</span> ');
        });

        fadingHeading[a].innerHTML = "";

        for (let i = 0; i < content.length; i++) {
            fadingHeading[a].innerHTML += content[i];
        }
      }
    }
  });

  $( ".attention.toggle" ).click(function() {
    $( ".attention.buttons" ).toggleClass("off");
    $( ".attention.buttons" ).toggleClass("on");
    $(this).toggleClass("active");
    $(this).toggleClass("inactive");

    $(".norm").toggleClass("none");
    $(".innorm").toggleClass("none");
  });

  let time = 0;

  function hi() {
      var at = setTimeout(function(){
        $(".c").animate({top: '41px'});
        $(".b").animate({top: '82px'});
      }, 3000);
      var bt = setTimeout(function(){
        $(".c").animate({top: '0px'});
        $(".b").animate({top: '41px'});
        $(".a").animate({top: '82px'});
      }, 6000);
      var ct = setTimeout(function(){
        $(".b").animate({top: '123px'});
        $(".d").animate({top: '41px'});
      }, 9000);
      var dt = setTimeout(function(){
        $(".f").animate({top: '164px'});
        $(".e").animate({top: '205px'});
      }, 12000);
      var et = setTimeout(function(){
        $(".a").animate({top: '0px'});
        $(".c").animate({top: '82px'});
      }, 15000);
      var ft = setTimeout(function(){
        $(".d").animate({top: '123px'});
        $(".b").animate({top: '41px'});
      }, 18000);

      var gt = setTimeout(function(){
        $(".g").animate({top: '205px'});
        $(".e").animate({top: '246px'});
      }, 21000);
      var gt = setTimeout(function(){
        $(".g").animate({top: '287px'});
        $(".e").animate({top: '164px'});
        $(".f").animate({top: '205px'});
        $(".h").animate({top: '246px'});
      }, 24000);
      var gt = setTimeout(function(){
        $(".h").animate({top: '287px'});
        $(".g").animate({top: '246px'});
      }, 27000);

      time = time + 1
  }

  hi();

  var interval = setInterval(function(){
    if (time > 0) {
      hi();
    }
  }, 30000);

  // $('body').click(function() {
  //   if ($('.innorm').is(':visible')) {
  //     console.log('visible');
  //
  //     function clearint(){
  //       clearInterval(interval);
  //       console.log('cleared');
  //     }
  //
  //     clearint();
  //
  //     $(".a").css('top', '0px');
  //     $(".b").css('top', '41px');
  //     $(".c").css('top', '82px');
  //     $(".d").css('top', '123px');
  //     $(".e").css('top', '164px');
  //     $(".f").css('top', '205px');
  //
  //     let time = 0;
  //
  //     function hi() {
  //         var at = setTimeout(function(){
  //           $(".c").animate({top: '41px'});
  //           $(".b").animate({top: '82px'});
  //         }, 3000);
  //         var bt = setTimeout(function(){
  //           $(".c").animate({top: '0px'});
  //           $(".b").animate({top: '41px'});
  //           $(".a").animate({top: '82px'});
  //         }, 6000);
  //         var ct = setTimeout(function(){
  //           $(".b").animate({top: '123px'});
  //           $(".d").animate({top: '41px'});
  //         }, 9000);
  //         var dt = setTimeout(function(){
  //           $(".f").animate({top: '164px'});
  //           $(".e").animate({top: '205px'});
  //         }, 12000);
  //         var et = setTimeout(function(){
  //           $(".a").animate({top: '0px'});
  //           $(".c").animate({top: '82px'});
  //         }, 15000);
  //         var ft = setTimeout(function(){
  //           $(".d").animate({top: '123px'});
  //           $(".b").animate({top: '41px'});
  //         }, 18000);
  //         var gt = setTimeout(function(){
  //           $(".f").animate({top: '205px'});
  //           $(".e").animate({top: '164px'});
  //         }, 21000);
  //
  //         time = time + 1
  //     }
  //
  //     hi();
  //
  //     var interval = setInterval(function(){
  //       if (time > 0) {
  //         hi();
  //       }
  //     }, 24000);
  //   } else {
  //     console.log('invisible');
  //
  //
  //     function clearint(){
  //       clearInterval(interval);
  //       console.log('cleared');
  //     }
  //
  //     clearint();
  //
  //     $(".a").css('top', '0px');
  //     $(".b").css('top', '41px');
  //     $(".c").css('top', '82px');
  //     $(".d").css('top', '123px');
  //     $(".e").css('top', '164px');
  //     $(".f").css('top', '205px');
  //   }
  // });


// setInterval(sayHi, 1);


  // $( ".toggle" ).click(function() {
  //   $( "#no_mess" ).toggleClass("none");
  //   $( "#mess" ).toggleClass("none");
  //
  //   $( ".buttons" ).toggleClass("off");
  //   $( ".buttons" ).toggleClass("on");
  //
  //   $(this).toggleClass("active");
  //   $(this).toggleClass("inactive");
  //
  //   $("#writing").toggleClass("writingon");
  //   $("#can").toggleClass("none");
  //
  //   $(".po").toggleClass("leafone");
  //   $(".pt").toggleClass("leaftwo");
  //
  //   $(".average").toggleClass("none");
  //   $(".clown").toggleClass("none");
  //   $(".lines").toggleClass("none");
  //
  //   $(".norm").toggleClass("none");
  //   $(".killme").toggleClass("none");
  //
  // });




  // $( ".inside_pic" ).click(function() {
  //   $(this).toggleClass("zoom");
  //   $(this).toggleClass("unzoom");
  //   $(".overflow").toggleClass("none");
  // });
  $( ".overflow" ).click(function() {
    // $(this).fadeOut();
    // setTimeout(function(){
      $(".close").addClass("none");
      $(".close").removeClass("big");
      $(this).addClass("none");
    // }, 400);
  });

  $( "#first_p" ).click(function() {
    $(".first_p").toggleClass("none");
    $(".overflow").toggleClass("none");
    setTimeout(function(){
      $(".first_p").toggleClass("big");
    }, 10);
  });
  $( "#second_p" ).click(function() {
    $(".second_p").toggleClass("none");
    $(".overflow").toggleClass("none");
    setTimeout(function(){
      $(".second_p").toggleClass("big");
    }, 10);
  });
  $( "#third_p" ).click(function() {
    $(".third_p").toggleClass("none");
    $(".overflow").toggleClass("none");
    setTimeout(function(){
      $(".third_p").toggleClass("big");
    }, 10);
  });
  $( "#fourth_p" ).click(function() {
    $(".fourth_p").toggleClass("none");
    $(".overflow").toggleClass("none");
    setTimeout(function(){
      $(".fourth_p").toggleClass("big");
    }, 10);
  });


  // $(document).mousemove(function (event) {
  // let leaff = $(".leafone, .leaftwo");
  // let x = (leaff.offset().left) + (leaff.width() / 2);
  // let y = (leaff.offset().top) + (leaff.height() / 2);
  // let rad = Math.atan2(event.pageX - x, event.pageY - y);
  // let rot = (rad * (45 / Math.PI) * -1) + 30;
  //
  // if ($('#coordination').is(":hover")) {
  // leaff.css({
  //   '-webkit-transform': 'rotate(' + rot + 'deg)',
  //   '-moz-transform': 'rotate(' + rot + 'deg)',
  //   '-ms-transform': 'rotate(' + rot + 'deg)',
  //   'transform': 'rotate(' + rot + 'deg)'
  // });
  // } else {
  // $(".leafone, .leaftwo").css({'transform' : 'rotate('+ 0 +'deg)'});
  // }
  // });

//   setInterval(anima, 6000);
//   setInterval(animatwo, 6000);
//
//
// function anima() {
//   setTimeout(function(){
//     $("#f").addClass("none");
//   }, 0);
//   setTimeout(function(){
//     $("#s").removeClass("none");
//   }, 0);
//   setTimeout(function(){
//       $("#s").addClass("none");
//   }, 2000);
//   setTimeout(function(){
//       $("#t").removeClass("none");
//   }, 2000);
//   setTimeout(function(){
//       $("#t").addClass("none");
//   }, 4000);
//   setTimeout(function(){
//       $("#f").removeClass("none");
//   }, 4000);
//   setTimeout(function(){
//   }, 6000);
// }
//
// function animatwo() {
//   setTimeout(function(){
//     $(".a").addClass("none");
//   }, 1500);
//   setTimeout(function(){
//     $(".b").removeClass("none");
//   }, 1500);
//   setTimeout(function(){
//       $(".b").addClass("none");
//   }, 3000);
//   setTimeout(function(){
//       $(".c").removeClass("none");
//   }, 3000);
//   setTimeout(function(){
//       $(".c").addClass("none");
//   }, 4500);
//   setTimeout(function(){
//       $(".d").removeClass("none");
//   }, 4500);
//   setTimeout(function(){
//       $(".d").addClass("none");
//   }, 6000);
//   setTimeout(function(){
//       $(".a").removeClass("none");
//   }, 6000);
// }

  var className = "inverted";
  var scrollTrigger = 60;

  window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByClassName("h_name")[0].classList.add(className);
    } else {
      document.getElementsByClassName("h_name")[0].classList.remove(className);
    }
  };

});
