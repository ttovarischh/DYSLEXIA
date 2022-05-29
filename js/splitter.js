console.log("lool");

function splitLines(container, opentag, closingtag) {
       var spans = container.children,
    top = 0,
    tmp = '';
container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');	   for (let i = 0; i < spans.length; i++) {
    var rect = spans[i].getBoundingClientRect().top;
    if (top < rect) tmp += closingtag + opentag;
    top = rect;
    tmp += spans[i].textContent + ' ';
}
container.innerHTML = tmp += closingtag;
}

splitLines(document.querySelectorAll('p')[11], '<span>','</span>');

$( ".worry" ).click(function() {
  alert( "Handler for .click() called." );
  // $(".worry span:nth-child(2)").insertBefore($(".worry span:nth-child(1)"));
  if (spanCount == 7) {
    $(".worry").find('span').addClass("abs");
    $(".worry").css('height', '287px');

    $(".worry span:nth-child(1)").css('top', '0px');
    $(".worry span:nth-child(2)").css('top', '41px');
    $(".worry span:nth-child(3)").css('top', '82px');
    $(".worry span:nth-child(4)").css('top', '123px');
    $(".worry span:nth-child(5)").css('top', '164px');
    $(".worry span:nth-child(6)").css('top', '205px');
    $(".worry span:nth-child(7)").css('top', '246px');







  }
  // $(".worry span:nth-child(2)").animate({top: '90px'});
});

var spanCount = $('.worry span').length;
$(".al").html(slideCount);
