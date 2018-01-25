$(function(){
  $(".thumbnails a").attr('rel', 'gallery').fancybox();

  $("#nav-list li, #scroll_up").click(function(e) {
    e.preventDefault();
     $('html, body').animate({
        scrollTop: $($(this).children("a").attr("href")).offset().top
     },1500);
   });
 });

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

  // ******Плавный скрол
 
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


//***** CAROUSEL *****//

$('#carouselHacked').carousel();



//***** END CAROUSEL *****//

// //***** BUBLE ANIMATIONS *****//

// for (var i = 0; i < 30; i++) {var d = document.createElement('div');d.className = 'bubble';var a = Math.random() * 20 + 10 + 'px';d.style.width = a;d.style.height = a;d.style.bottom = Math.random() * 400 + 'px';d.style.left = Math.random() * document.body.offsetWidth + 'px';document.body.appendChild(d);Animate(d)}

// function Animate(a) {
//   $(a).animate({
//     bottom: document.body.offsetHeight + 'px',
//     left: '+=' + ((Math.random() * 100) - 50) + 'px'
//   }, Math.random() * 100000 + 200, 'linear', function() {
//     a.style.bottom = '0px';Animate(a)
//   });
// }

// //***** END BUBLE *****//

