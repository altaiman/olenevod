$(function(){
    $('.events__slider').slick({
        slidesToShow: 1,
        arrows: false,
    });

    $('.faq__question').on('click', function() {
        $(this).toggleClass('open');
    });

    $('.countdown').flipcountdown({
        size: 'sm'
    });

});