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
});