	var slideCount = $('.item').length;
	var slideWidth = $('.item').width();
	var i = 1

	$(".curr").html(i);
  $(".all").html(slideCount);

	$(window).resize(function() {
		console.log("resized");
		var slideWidth = $('.item').width();
		pos = slideWidth * (i - 1);
		console.log(pos);
		$(".slides").css({
			left : - pos
		});
	});

	function moveLeft() {
		$('.slides').animate({
				left: '-='+slideWidth
		}, 500, function () {
		});
	};

	function moveRight() {
		$('.slides').animate({
				left: '+='+slideWidth
		}, 500, function () {
		});
	};

	$('#right').click(function () {
		if (i == slideCount) {
			i = 1
			$('.slides').animate({
					left: 0
			}, 500, function () {
			});
		} else {
			i = i + 1;
			moveLeft();
		}
		$(".curr").html(i);
	});

	$('#left').click(function () {
		if (i == 1) {
			i = slideCount
			$('.slides').animate({
					left: - (slideWidth * (slideCount - 1))
			}, 500, function () {
			});
		} else {
			i = i - 1;
			moveRight();
		}
		$(".curr").html(i);
	});
