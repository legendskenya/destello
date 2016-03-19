//Script for scolling menu
var navbottom = $('.overlay').offset().top + $('.overlay').height();

$(window).on('scroll',function(){
    // we round off here to reduce a little workload
    var stop = Math.round($(window).scrollTop());
    if (stop > 0) {
        $('.menu').addClass('pastnav');
        $('.title').addClass('shimmer');

    } else {
        $('.menu').removeClass('pastnav');
        $('.title').removeClass('shimmer');
    }
});
