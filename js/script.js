$(function(){
    $('.events__slider').slick({
        slidesToShow: 1,
        arrows: false,
    });

    $('.faq__question').on('click', function() {
        $(this).toggleClass('open');
    });
    
    var date = new Date(2018, 6, 21);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);

    var countdown = $('.countdown').FlipClock(diff, {
        countdown: true
    });

});