document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.cards', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
//aqui pondre la tabla