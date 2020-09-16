$(window).scroll(function(){
    if ( $(window).scrollTop() > 100) {
        $('.navbackground').addClass('animation');
        $('.navbackground').removeClass('removeanimation');
    } else {
        $('.navbackground').addClass('removeanimation');
        $('.navbackground').removeClass('animation');
    }
});

$(document).ready(function(){
    $("#navlist li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});