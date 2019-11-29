'use strict'
// function myFunction(features) {
//     var features = document.getElementById("container-pirmas");
//     features.scrollIntoView();
//   }

var mySwiper1 = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 120,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3
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
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 800,
    clickable: true,
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
      1000: {
        slidesPerView: 1
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
 

  

