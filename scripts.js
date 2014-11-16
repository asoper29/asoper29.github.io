$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('#head-img').css({'top': 2.0*scrollVar });
    $('#head-img').css({'opacity':( 300-scrollVar )/100});
});
