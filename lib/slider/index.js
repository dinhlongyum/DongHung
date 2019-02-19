const homeSlider = ()=>{
    var swiper = new Swiper('.swiper-container',{
            effect: 'fade',
            // autoplay: {
            //     delay: 1000,
            //     disableOnInteraction: false,
            //   },
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
}
app.ready(function(){
    homeSlider()
})