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

  var className = "visible";
  var scrollTrigger = 60;

  window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByClassName("toadd")[0].classList.add(className);
    } else {
      document.getElementsByClassName("toadd")[0].classList.remove(className);
    }
  };
});
