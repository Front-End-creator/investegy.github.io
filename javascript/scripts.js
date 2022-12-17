$(window).scroll(function(){
    $('.navbackground').addClass('animation');
    if ( $(window).scrollTop() > 0) {
        $('.navbackground').addClass('animation').removeClass('removeanimation');
    } else {
            $('.navbackground').removeClass('animation').addClass('removeanimation'); 
}
});

$(document).ready(function(){
    $("#navlist li, #menu li").on("click",".ref, .link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
    $("#menu li a, #menu li #consultation").on("click", function () {
        $("#checkbox").prop("checked", false);
    });
    $("#consultation, .attraction button").on("click", function () {
        $('#backlayer').show("fast");
        $('body').css("overflow", "hidden");
    });
    $("#helperlayer").on("click", function () {
        $('#backlayer').hide("fast");
        $('body').css("overflow", "visible");
    });
});


$('#submit_btn').on('click', sendForm2);
function sendForm2() {
    $('.text-error').slideUp();
    $('.text-success').slideUp();
    let name = $('#name').val();
    let email = $('#email').val();
    let request = $('#request').val();
    var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var v_name = name?false:true;
    var v_email = email?false:true;
    var v_request = request?false:true;
    const token = "1313923746:AAG03pSHtn9pgiWvmJC0FG3Eo-TKG2IPFXs";
    const chatId = "-436967359";
    let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + chatId + '&text=';
    let xhttp = new XMLHttpRequest();
    if(v_name && v_email && v_request)
    {
        $('.text-error').slideDown();
    } 
    else if(!reg.test($('#email').val()))
    {
        $('.text-error').slideDown();
    }
    else{
        $('.text-success').slideDown();
        xhttp.open("GET", url + "Hello Yaroslav, you have a new client.%0AName : " + name + ",%0AEmail : " + email + ",%0ARequest : " + request, true);
        xhttp.send();
        $('#name').val("");
        $('#email').val("");
        $('#request').val("");
    }
};


$('#submit_btn2').on('click', sendForm);
function sendForm() {
    $('.text-error2').slideUp();
    $('.text-success2').slideUp();
    let name = $('#name2').val();
    let email = $('#email2').val();
    let request = $('#request2').val();
    var reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
    var v_name = name?false:true;
    var v_email = email?false:true;
    var v_request = request?false:true;
    const token = "1313923746:AAG03pSHtn9pgiWvmJC0FG3Eo-TKG2IPFXs";
    const chatId = "-436967359";
    let url = 'https://api.telegram.org/bot' + token +'/sendMessage?chat_id=' + chatId + '&text=';
    let xhttp = new XMLHttpRequest();
    if(v_name && v_email && v_request)
    {
        $('.text-error2').slideDown();
    } 
    else if(!reg.test($('#email2').val()))
    {
        $('.text-error2').slideDown();
    }
    else{
        $('.text-success2').slideDown();
        xhttp.open("GET", url + "Hello Yaroslav, you have a new client.%0AName : " + name + ",%0AEmail : " + email + ",%0ARequest : " + request, true);
        xhttp.send();
        $('#name2').val("");
        $('#email2').val("");
        $('#request2').val("");
    }
};