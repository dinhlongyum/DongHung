const toggleHeaderButton = () => {
    app.select('.dh-header .toggle-button').addEventListener('click', function() {
        app.toggleClass(this,'active')
    })
}
const headerInPage = () =>{
    main.addListener(function(){
        let scroll = main.scrollTop
        let header = app.select('.main-wrapper').offsetHeight
        let hei = window.innerHeight - header
        if(scroll > hei){
            app.addClass(app.select('.dh-header'), 'inPage')
        }
        else{
            app.removeClass(app.select('.dh-header'), 'inPage')
        }
    })
}
const headerOnScroll = () =>{
    main.addListener(function(){
        let scroll = main.scrollTop
        if(scroll > 0){
            app.addClass(app.select('.dh-header'), 'onScroll')
            app.addClass(app.select('.grid'), 'onScroll')
        }
        else{
            app.removeClass(app.select('.dh-header'), 'onScroll')
            app.removeClass(app.select('.grid'), 'onScroll')
        }
    })
}
const toggleHeaderWrapper = () =>{
    app.select('.dh-header .toggle-button').addEventListener('click', function() {
        app.toggleClass(app.select('.dh-header'),'active')
        app.toggleClass(app.select('.grid'),'active')
        app.toggleClass(app.select('.scroll-Animate'),'active')
    })
}
app.ready(function(){
    toggleHeaderButton()
    headerInPage()
    headerOnScroll()
    toggleHeaderWrapper()
})
