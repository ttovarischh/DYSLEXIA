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
    const halfHeight = $(this).height()/2;
    const halfwidth = $(this).width()/2;
    let offSetY = -(event.pageY - halfHeight) /4;
    let offSetX = (event.pageX-halfwidth) / 3.8;
    $('.scene').css({'transform' : 'rotateX(' + offSetY + 'deg) rotateY(' + offSetX + 'deg)'});
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


  $( ".inside_pic" ).click(function() {
    $(this).toggleClass("zoom");
    $(this).toggleClass("unzoom");
    $(".overflow").toggleClass("none");
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

  setInterval(anima, 6000);
  setInterval(animatwo, 6000);


function anima() {
  setTimeout(function(){
    $("#f").addClass("none");
  }, 0);
  setTimeout(function(){
    $("#s").removeClass("none");
  }, 0);
  setTimeout(function(){
      $("#s").addClass("none");
  }, 2000);
  setTimeout(function(){
      $("#t").removeClass("none");
  }, 2000);
  setTimeout(function(){
      $("#t").addClass("none");
  }, 4000);
  setTimeout(function(){
      $("#f").removeClass("none");
  }, 4000);
  setTimeout(function(){
  }, 6000);
}

function animatwo() {
  setTimeout(function(){
    $(".a").addClass("none");
  }, 1500);
  setTimeout(function(){
    $(".b").removeClass("none");
  }, 1500);
  setTimeout(function(){
      $(".b").addClass("none");
  }, 3000);
  setTimeout(function(){
      $(".c").removeClass("none");
  }, 3000);
  setTimeout(function(){
      $(".c").addClass("none");
  }, 4500);
  setTimeout(function(){
      $(".d").removeClass("none");
  }, 4500);
  setTimeout(function(){
      $(".d").addClass("none");
  }, 6000);
  setTimeout(function(){
      $(".a").removeClass("none");
  }, 6000);
}
});
