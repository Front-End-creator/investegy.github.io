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
    $("#consultation, .attraction button").on("click", function () {
        $('#backlayer').show();
        $('body').css("overflow", "hidden");
    });
    $("#helperlayer").on("click", function () {
        $('#backlayer').hide();
        $('body').css("overflow", "visible");
    });
});


$('#submit_btn').on('click', sendForm);
function sendForm() {
    let name = $('#name').val();
    let email = $('#email').val();
    let request = $('#request').val();
    const token = "1313923746:AAG03pSHtn9pgiWvmJC0FG3Eo-TKG2IPFXs";
    const chatId = "-436967359";
    let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + chatId + '&text=';

    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url + "Hello Yaroslav, you have a new client.%0AName : " + name + ",%0AEmail : " + email + ",%0ARequest : " + request, true);
    xhttp.send();
    $('#name').val("");
    $('#email').val("");
    $('#request').val("");
};

$('#submit_btn2').on('click', sendForm);
function sendForm() {
    let name = $('#name2').val();
    let email = $('#email2').val();
    let request = $('#request2').val();
    const token = "1313923746:AAG03pSHtn9pgiWvmJC0FG3Eo-TKG2IPFXs";
    const chatId = "-436967359";
    let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + chatId + '&text=';

    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", url + "Hello Yaroslav, you have a new client.%0AName : " + name + ",%0AEmail : " + email + ",%0ARequest : " + request, true);
    xhttp.send();
    $('#name2').val("");
    $('#email2').val("");
    $('#request2').val("");
};