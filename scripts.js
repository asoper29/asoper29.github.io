$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('#head-img').css({'top': 0.7*scrollVar });
    $('#head-img').css({'opacity':( 100-scrollVar )/100});
});
