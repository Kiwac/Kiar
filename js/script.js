$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    touchThreshold: 20,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow:4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow:3,
        }
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow:1,
        }
      }
    ]
  });
  $('.bg-slider').slick({
    arrows: false,
    slidesToShow: 1,
    speed: 1000,
    touchThreshold: 20,
    waitForAnimate: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $('.submenu__burger').click(function(event){
    $('.submenu__burger, .submenu-nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

var header = $('.js-header'),
  cloneHeader = header.clone();


cloneHeader.addClass('header--fixed');
header.before(cloneHeader);


console.log(header);

$(window).scroll(function() {
  console.log($(window).scrollTop());

  if($(window).scrollTop() > 725) {
    cloneHeader.addClass('header--is-show');
  }
  else {
    cloneHeader.removeClass('header--is-show');
  }
});