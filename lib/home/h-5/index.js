var swiper = new Swiper('.dh-home-5 .swiper-container', {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayStopOnLast: false,
    effect: 'slide',
    spaceBetween: 270,
    slidesPerView: 1.5,
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        992: {
            spaceBetween: 30,
            slidesPerView: 1
        }
    }
  })        