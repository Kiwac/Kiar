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
  

  $('.background-slider').slick({
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
    $('body').toggleClass('lock');   
  });

  $('.search__btn').click(function(){
    $('.header__logo, .link, .search__btn,.link-login, .nav__link, .submenu__burger').addClass('hide')
    $('.search-form').addClass('active');
  });
  $('.search__close').click(function(){
    $('.header__logo, .link, .search__btn,.link-login, .submenu__burger').removeClass('hide')
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



const galleryItem = document.getElementsByClassName("gallery__item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("lightbox-prev");
lightBoxNext.classList.add("lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);