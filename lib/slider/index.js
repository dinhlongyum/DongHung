const homeSlider = ()=>{
    var swiper = new Swiper('.swiper-container',{
            effect: 'fade',
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
              },
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
              },
        })
}
const circle = ()=>{
    let height = app.select('.dh-slider .circle').offsetHeight
    let el = app.selectAll('.dh-slider .circle')
    for(let i = 0; i<el.length;i++){
    el[i].style.width = height + 'px'
}
    // console.log(height)
}
app.ready(function(){
    homeSlider()
    circle()
})
app.resize(function(){
    circle()
})