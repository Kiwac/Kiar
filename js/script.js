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
    autoplaySpeed: 3000,
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
    $('.header__logo, .nav-1, .nav-2').addClass('hide')
    $('.search-form').addClass('active');
  });
  $('.search__close').click(function(){
    $('.header__logo, .nav-1, .nav-2').removeClass('hide')
    $('.search-form').removeClass('active');
  });
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

const header = document.querySelector('.js-header');
const start =document.querySelector('.js-start');
const headerHeight = header.offsetHeight;
const startdHeight = start.offsetHeight;
let lastScrollTop=0;

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if(scrollDistance > lastScrollTop) {
    header.classList.add('header--fixed__hide');
    header.classList.remove('header--fixed__show');
    start.style.marginTop= null;
  }
  else {
    header.classList.add('header--fixed__show');
    header.classList.remove('header--fixed__hide');
    start.style.marginTop= '$(headerHeight)px';
  }

  if(scrollDistance === 0) {
    header.classList.remove('header--fixed__show');
    start.style.marginTop= null;
  }

  lastScrollTop = scrollDistance;

});