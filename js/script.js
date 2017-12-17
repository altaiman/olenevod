$(function(){
    $('.events__slider').slick({
        slidesToShow: 1,
        // arrows: false,
        prevArrow: $('.arrow_prev'),
        nextArrow: $('.arrow_next')
    });

    $('.faq__question').on('click', function() {
        $(this).toggleClass('open');
    });

    $('.countdown').flipcountdown({
        size: 'sm'
    });

});