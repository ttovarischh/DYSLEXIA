$(document).mousemove(function(event){
  const halfHeight = $(this).height()/2;
  const halfwidth = $(this).width()/2;
  let offSetY = -(event.pageY - halfHeight) /4;
  let offSetX = (event.pageX-halfwidth) / 3.8;
  $('.scene').css({'transform' : 'rotateX(' + offSetY + 'deg) rotateY(' + offSetX + 'deg)'});
});
