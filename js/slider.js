// /* Устанавливаем стартовый индекс слайда по умолчанию: */
// let slideIndex = 1;
//
//
// $(".curr span").html(slideIndex);
// /* Вызываем функцию, которая реализована ниже: */
// showSlides(slideIndex);
//
// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
// function nextSlide() {
//     showSlides(slideIndex += 1);
// }
//
// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }
//
// /* Устанавливаем текущий слайд: */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// /* Функция перелистывания: */
// function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
//     let slides = document.getElementsByClassName("item");
//
//     /* Проверяем количество слайдов: */
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//
//     /* Проходим по каждому слайду в цикле for: */
//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     /* Делаем элемент блочным: */
//     slides[slideIndex - 1].style.display = "block";
// }
//
// $("#left").click(previousSlide);
// $("#right").click(nextSlide);

jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 3000);
  // });

	var slideCount = $('.item').length;
	var slideWidth = $('.item').width();
	var slideHeight = $('.item').height();
	var sliderUlWidth = slideCount * slideWidth;

  $(".curr").html(slideCount);
  $(".all").html(slideCount);


	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('#left').click(function () {
        moveLeft();
    });

    $('#right').click(function () {
        moveRight();
    });

});
