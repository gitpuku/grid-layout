class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
}

_initSwiper() {
    return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        grabCursor: true,
        // effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1.5,
        speed: 1000,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            }
        },
    });
}
}