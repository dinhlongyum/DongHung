const homeSlider = ()=>{
    var swiper = new Swiper('.dh-slider .swiper-container',{
            effect: 'fade',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
            speed: 1000,
            // navigation: {
            //     nextEl: '.dh-slider .swiper-button-next',
            //     prevEl: '.dh-slider .swiper-button-prev',
            // },
            loop: true,
            pagination: {
                el: '.dh-slider .swiper-pagination',
                type: 'progressbar',
              },
        })
}
const circle = ()=>{
    let height = app.select('.dh-slider .circle').offsetHeight
    let el = app.selectAll('.dh-slider .circle')
    for(let i = 0; i<el.length;i++){
    el[i].style.width = height + 'px'
}}
const buttonCircle = ()=>{
    let el = app.selectAll('.dh-slider .button .button-circle')
    let offset = app.select('.dh-slider .button .button-main').offsetHeight
    // console.log(off)
    for(let i = 0; i<el.length;i++){
        el[i].style.width = offset + 'px'
        el[i].style.height = offset + 'px'
    }
}

app.ready(function(){
    homeSlider()
    circle()
    buttonCircle()
})
app.resize(function(){
    circle()
    buttonCircle()
})