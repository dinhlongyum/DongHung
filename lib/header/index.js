const toggleHeaderButton = () => {
    app.select('.dh-header .toggle-button').addEventListener('click', function() {
        app.toggleClass(this,'active')
    })
}
app.ready(function(){
    toggleHeaderButton()
})
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