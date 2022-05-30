$(document).ready(function () {
  $( ".attention.toggle" ).click(function() {
    $( ".attention.buttons" ).toggleClass("off");
    $( ".attention.buttons" ).toggleClass("on");
    $(this).toggleClass("active");
    $(this).toggleClass("inactive");

    $(".norm").toggleClass("none");
    $(".worry").toggleClass("none");


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
    var spanCount = $(".worry").find('span').length;

      if (spanCount == 15) {
        console.log('15');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '285px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '19px');
        $(".worry span:nth-child(3)").css('top', '38px');
        $(".worry span:nth-child(4)").css('top', '57px');
        $(".worry span:nth-child(5)").css('top', '76px');
        $(".worry span:nth-child(6)").css('top', '95px');
        $(".worry span:nth-child(7)").css('top', '114px');
        $(".worry span:nth-child(8)").css('top', '133px');
        $(".worry span:nth-child(9)").css('top', '152px');
        $(".worry span:nth-child(10)").css('top', '171px');
        $(".worry span:nth-child(11)").css('top', '190px');
        $(".worry span:nth-child(12)").css('top', '209px');
        $(".worry span:nth-child(13)").css('top', '228px');
        $(".worry span:nth-child(14)").css('top', '247px');
        $(".worry span:nth-child(15)").css('top', '266px');

        let time = 0;

        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '19px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '19px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '19px'});
              $(".worry span:nth-child(2)").animate({top: '38px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '19px'});
              $(".worry span:nth-child(3)").animate({top: '38px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '76px'});
              $(".worry span:nth-child(5)").animate({top: '57px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '76px'});
              $(".worry span:nth-child(4)").animate({top: '57px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '114px'});
              $(".worry span:nth-child(7)").animate({top: '95px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '114px'});
              $(".worry span:nth-child(6)").animate({top: '95px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '152px'});
              $(".worry span:nth-child(9)").animate({top: '133px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '152px'});
              $(".worry span:nth-child(8)").animate({top: '133px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '190px'});
              $(".worry span:nth-child(11)").animate({top: '171px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '171px'});
              $(".worry span:nth-child(11)").animate({top: '190px'});
            }, 36000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '228px'});
              $(".worry span:nth-child(13)").animate({top: '209px'});
            }, 39000);
            setTimeout(function(){
              $(".worry span:nth-child(13)").animate({top: '228px'});
              $(".worry span:nth-child(12)").animate({top: '209px'});
            }, 42000);
            setTimeout(function(){
              $(".worry span:nth-child(14)").animate({top: '266px'});
              $(".worry span:nth-child(15)").animate({top: '247px'});
            }, 45000);
            setTimeout(function(){
              $(".worry span:nth-child(15)").animate({top: '266px'});
              $(".worry span:nth-child(14)").animate({top: '247px'});
            }, 48000);
            time = time + 1
        }
        hi();

        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 51000);

      } else if (spanCount == 14) {
        console.log('14');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '266px');
        $(".worry span:nth-child(1)").css('letter-spacing', '-0.6px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '19px');
        $(".worry span:nth-child(3)").css('top', '38px');
        $(".worry span:nth-child(4)").css('top', '57px');
        $(".worry span:nth-child(5)").css('top', '76px');
        $(".worry span:nth-child(6)").css('top', '95px');
        $(".worry span:nth-child(7)").css('top', '114px');
        $(".worry span:nth-child(8)").css('top', '133px');
        $(".worry span:nth-child(9)").css('top', '152px');
        $(".worry span:nth-child(10)").css('top', '171px');
        $(".worry span:nth-child(11)").css('top', '190px');
        $(".worry span:nth-child(12)").css('top', '209px');
        $(".worry span:nth-child(13)").css('top', '228px');
        $(".worry span:nth-child(14)").css('top', '247px');

        let time = 0;

        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '19px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '19px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '19px'});
              $(".worry span:nth-child(2)").animate({top: '38px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '19px'});
              $(".worry span:nth-child(3)").animate({top: '38px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '76px'});
              $(".worry span:nth-child(5)").animate({top: '57px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '76px'});
              $(".worry span:nth-child(4)").animate({top: '57px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '114px'});
              $(".worry span:nth-child(7)").animate({top: '95px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '114px'});
              $(".worry span:nth-child(6)").animate({top: '95px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '152px'});
              $(".worry span:nth-child(9)").animate({top: '133px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '152px'});
              $(".worry span:nth-child(8)").animate({top: '133px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '190px'});
              $(".worry span:nth-child(11)").animate({top: '171px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '171px'});
              $(".worry span:nth-child(11)").animate({top: '190px'});
            }, 36000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '228px'});
              $(".worry span:nth-child(13)").animate({top: '209px'});
            }, 39000);
            setTimeout(function(){
              $(".worry span:nth-child(13)").animate({top: '228px'});
              $(".worry span:nth-child(12)").animate({top: '209px'});
            }, 42000);
            setTimeout(function(){
              $(".worry span:nth-child(14)").animate({top: '228px'});
              $(".worry span:nth-child(13)").animate({top: '247px'});
            }, 45000);
            setTimeout(function(){
              $(".worry span:nth-child(13)").animate({top: '228px'});
              $(".worry span:nth-child(14)").animate({top: '247px'});
            }, 48000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 51000);
      } else if (spanCount == 13) {
        console.log('13');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '533px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');
        $(".worry span:nth-child(9)").css('top', '328px');
        $(".worry span:nth-child(10)").css('top', '369px');
        $(".worry span:nth-child(11)").css('top', '410px');
        $(".worry span:nth-child(12)").css('top', '451px');
        $(".worry span:nth-child(13)").css('top', '492px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(3)").animate({top: '82px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(4)").animate({top: '123px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '205px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '287px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '328px'});
              $(".worry span:nth-child(8)").animate({top: '287px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '410px'});
              $(".worry span:nth-child(11)").animate({top: '369px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '369px'});
              $(".worry span:nth-child(11)").animate({top: '410px'});
            }, 36000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '492px'});
              $(".worry span:nth-child(13)").animate({top: '451px'});
            }, 39000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '451px'});
              $(".worry span:nth-child(13)").animate({top: '492px'});
            }, 42000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 45000);
      } else if (spanCount == 12) {
        console.log('12');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '492px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');
        $(".worry span:nth-child(9)").css('top', '328px');
        $(".worry span:nth-child(10)").css('top', '369px');
        $(".worry span:nth-child(11)").css('top', '410px');
        $(".worry span:nth-child(12)").css('top', '451px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(3)").animate({top: '82px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(4)").animate({top: '123px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '205px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '287px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '328px'});
              $(".worry span:nth-child(8)").animate({top: '287px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '410px'});
              $(".worry span:nth-child(11)").animate({top: '369px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '369px'});
              $(".worry span:nth-child(11)").animate({top: '410px'});
            }, 36000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '410px'});
              $(".worry span:nth-child(11)").animate({top: '451px'});
            }, 39000);
            setTimeout(function(){
              $(".worry span:nth-child(12)").animate({top: '451px'});
              $(".worry span:nth-child(11)").animate({top: '410px'});
            }, 42000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 45000);
      } else if (spanCount == 11) {
        console.log('11');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '451px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');
        $(".worry span:nth-child(9)").css('top', '328px');
        $(".worry span:nth-child(10)").css('top', '369px');
        $(".worry span:nth-child(11)").css('top', '410px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(3)").animate({top: '82px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(4)").animate({top: '123px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '205px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '287px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '328px'});
              $(".worry span:nth-child(8)").animate({top: '287px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '410px'});
              $(".worry span:nth-child(11)").animate({top: '369px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '369px'});
              $(".worry span:nth-child(11)").animate({top: '410px'});
            }, 36000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 39000);
      } else if (spanCount == 10) {
        console.log('10');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '410px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');
        $(".worry span:nth-child(9)").css('top', '328px');
        $(".worry span:nth-child(10)").css('top', '369px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '0px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(1)").animate({top: '0px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(3)").animate({top: '82px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(4)").animate({top: '123px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '205px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '287px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '328px'});
              $(".worry span:nth-child(8)").animate({top: '287px'});
            }, 30000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '369px'});
            }, 33000);
            setTimeout(function(){
              $(".worry span:nth-child(10)").animate({top: '369px'});
              $(".worry span:nth-child(9)").animate({top: '328px'});
            }, 36000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 39000);
      } else if (spanCount == 9) {
        console.log('9');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '369px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');
        $(".worry span:nth-child(9)").css('top', '328px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '0px'});
              $(".worry span:nth-child(1)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '82px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(1)").animate({top: '0px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '123px'});
              $(".worry span:nth-child(5)").animate({top: '164px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '287px'});
              $(".worry span:nth-child(8)").animate({top: '205px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '287px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '287px'});
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '328px'});
              $(".worry span:nth-child(9)").animate({top: '287px'});
            }, 27000);
            setTimeout(function(){
              $(".worry span:nth-child(9)").animate({top: '328px'});
              $(".worry span:nth-child(8)").animate({top: '287px'});
            }, 30000);
            time = time + 1
        }
        hi();
        var interval = setInterval(function(){
          if (time > 0) {
            hi();
          }
        }, 33000);
      } else if (spanCount == 8) {
        console.log('8');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '328px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');
        $(".worry span:nth-child(8)").css('top', '287px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '0px'});
              $(".worry span:nth-child(1)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '82px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(1)").animate({top: '0px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '123px'});
              $(".worry span:nth-child(5)").animate({top: '164px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '287px'});
              $(".worry span:nth-child(8)").animate({top: '205px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '246px'});
              $(".worry span:nth-child(7)").animate({top: '287px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(8)").animate({top: '287px'});
              $(".worry span:nth-child(7)").animate({top: '246px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 24000);
            time = time + 1
          }
          hi();
          var interval = setInterval(function(){
            if (time > 0) {
              hi();
            }
          }, 27000);
      } else if (spanCount == 7) {
        console.log('7');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '287px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');
        $(".worry span:nth-child(7)").css('top', '246px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '0px'});
              $(".worry span:nth-child(1)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '82px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(1)").animate({top: '0px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '123px'});
              $(".worry span:nth-child(5)").animate({top: '164px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '205px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 21000);
            setTimeout(function(){
              $(".worry span:nth-child(7)").animate({top: '205px'});
              $(".worry span:nth-child(6)").animate({top: '246px'});
            }, 24000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '205px'});
              $(".worry span:nth-child(7)").animate({top: '246px'});
            }, 27000);
            time = time + 1
          }
          hi();
          var interval = setInterval(function(){
            if (time > 0) {
              hi();
            }
          }, 30000);
      } else if (spanCount == 6) {
        console.log('6');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '246px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');
        $(".worry span:nth-child(6)").css('top', '205px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '0px'});
              $(".worry span:nth-child(1)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '82px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(1)").animate({top: '0px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '123px'});
              $(".worry span:nth-child(5)").animate({top: '164px'});
            }, 15000);
            setTimeout(function(){
              $(".worry span:nth-child(6)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '205px'});
            }, 18000);
            setTimeout(function(){
              $(".worry span:nth-child(5)").animate({top: '164px'});
              $(".worry span:nth-child(6)").animate({top: '205px'});
            }, 21000);
            time = time + 1
          }
          hi();
          var interval = setInterval(function(){
            if (time > 0) {
              hi();
            }
          }, 24000);
      } else if (spanCount == 5) {
        console.log('5');
        $(".worry").find('span').addClass("abs");
        $(".worry").css('height', '246px');
        $(".worry span:nth-child(1)").css('top', '0px');
        $(".worry span:nth-child(2)").css('top', '41px');
        $(".worry span:nth-child(3)").css('top', '82px');
        $(".worry span:nth-child(4)").css('top', '123px');
        $(".worry span:nth-child(5)").css('top', '164px');

        let time = 0;
        function hi() {
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '41px'});
              $(".worry span:nth-child(2)").animate({top: '82px'});
            }, 3000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '0px'});
              $(".worry span:nth-child(1)").animate({top: '41px'});
            }, 6000);
            setTimeout(function(){
              $(".worry span:nth-child(3)").animate({top: '82px'});
              $(".worry span:nth-child(2)").animate({top: '41px'});
              $(".worry span:nth-child(1)").animate({top: '0px'});
            }, 9000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '164px'});
              $(".worry span:nth-child(5)").animate({top: '123px'});
            }, 12000);
            setTimeout(function(){
              $(".worry span:nth-child(4)").animate({top: '123px'});
              $(".worry span:nth-child(5)").animate({top: '164px'});
            }, 15000);
            time = time + 1
          }
          hi();
          var interval = setInterval(function(){
            if (time > 0) {
              hi();
            }
          }, 18000);
      }
  });
});

$(window).resize(function() {
  if ($(".attention.buttons").hasClass("on")) {
    location.reload();
  }
});
