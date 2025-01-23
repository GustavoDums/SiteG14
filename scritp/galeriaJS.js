
var thumbnails = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    spaceBetween: 30,
    watchSlidesProgress: true,
})


var slide = new Swiper('.slide-imagens', {
    effect: 'fade',
    speed: 800,
    grabCursor: true,
    thumbs: {
        swiper: thumbnails
    }
})
