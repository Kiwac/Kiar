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
  $('.link-login, .login__close').click(function(event){
    $('.link-login, .login').toggleClass('active');
    $('body').toggleClass('block');
    
  });
  $('.search__btn').click(function(){
    $('.nav-1').addClass('hide-nav')
    $('.search-form').addClass('active');
    $('.image__hide-show').hide();
  });
  $('.search__close').click(function(){
    $('.nav-1').removeClass('hide-nav')
    $('.search-form').removeClass('active');
    $('.image__hide-show').show();
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

const pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
          pwFields.forEach(pwField => {
            if(pwField.type ==="password"){
              pwField.type = "text";

              pwShowHide.forEach(icon => {
                icon.classList.replace("uil-eye-slash", "uil-eye");
              })
            }
            else{
              pwField.type = "password";

              pwShowHide.forEach(icon => {
                icon.classList.replace("uil-eye", "uil-eye-slash");
              })

            }
          })
        })
      });
