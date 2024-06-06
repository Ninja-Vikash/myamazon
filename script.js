const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  