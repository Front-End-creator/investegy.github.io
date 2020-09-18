$(window).scroll(function(){
    $('.navbackground').addClass('animation');
    if ( $(window).scrollTop() > 0) {
        $('.navbackground').addClass('animation').removeClass('removeanimation');
    } else {
            $('.navbackground').removeClass('animation').addClass('removeanimation'); 
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