'use strict'


var mySwiper1 = new Swiper ('.swiper-container ', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: -500,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 120,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: true,
      dynamicMainBullets: 3,
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  })
// 2 lape
  var mySwiper2 = new Swiper ('.swiper-container-antras', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 120,
    clickable: true,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
      800: {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 120,
        loop: false,
      },
    },

    navigation: {
      // nextEl: '.containerantraskairetekstas ',
      // prevEl: '.containerantraskairetekstas ',
    },
  })

var slideButtons = document.querySelectorAll('.containerantraskairetekstas');
for (var button of slideButtons) {
  button.addEventListener('click', function() {
    console.log(this.dataset.slide);
    mySwiper2.slideTo(this.dataset.slide);
  });
}

var header = document.getElementById("containerantraskaire");
var button = header.getElementsByClassName("containerantraskairetekstas");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}








  

