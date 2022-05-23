	var slideCount = $('.item').length;
	var slideWidth = $('.item').width();
	var i = 1
	var xMove = 200

	$(".curr").html(i);
  $(".all").html(slideCount);

	function moveLeft() {
		$('.slides').animate({
				left: '-='+slideWidth
		}, 200, function () {
		});
	};

	function moveRight() {
		$('.slides').animate({
				left: '+='+slideWidth
		}, 200, function () {
		});
	};

	$('#right').click(function () {
		if (i == slideCount) {
			i = 1
			$('.slides').animate({
					left: 0
			}, 200, function () {
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
			}, 200, function () {
			});
		} else {
			i = i - 1;
			moveRight();
		}
		$(".curr").html(i);
	});
