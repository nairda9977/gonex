$(function(){

    $('.header__img-slider').slick({
     autoplay:100,
        autoplaySpeed:7000,
        arrows:false,
    })
    
    new WOW().init();
    
    var mixer = mixitup('.works__gallery-items')
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle()
    })
    
})