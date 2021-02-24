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
        $('#backlayer').show();
        $('body').css("overflow", "hidden");
    });
    $("#helperlayer").on("click", function () {
        $('#backlayer').hide();
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




var arrLang = {
    'en': {
        'home': 'Home Page',
        'about': 'About Us',
        'results': 'Our Results',
        'contacts': 'Contacts',
        'consultation': 'consultation',
        'monetization': 'Monetization business, investors and analysts',
        'investment': 'Investment Consulting Services in the EU and Ukraine',
        'presentation': 'Download the presentation',
        'orderconsultation': 'Order a consultation',
        'formbutton': 'Send',
        'text-error': 'One or more fields have an error. Please check and try again.',
        'text-success': 'Thank you for your message. It has been sent.',
        'aboutinvestegy': 'Investegy is a company that implements innovative consulting solutions',
        'missions': 'Our mission',
        'mission1': 'To create the first international Ukrainian investment consulting company that will be internationally acknowledged and will have an impeccable reputation',
        'goals': 'Our goal',
        'goal1': 'To change investment consulting level in Ukraine to the best and to create additional opportunities for realization of investment projects in Ukraine and in the world',
        'values': 'Our value',
        'value1': 'To be a provider of professional consulting services bringing the highest value to each client',
        'value2': 'To provide strategic consulting solutions that allow companies to perform their business goals efficiently',
        'value3': 'To create long-term interaction between investor and business experts',
        'downloadportfolio': 'Download my potfolio',
        'attractionpar': 'Doing the Right Thing, at the Right Time!',
        'attractionbut': 'Get Started',
        'result1': 'The result of Investegy’s capabilities are the products that do, success of our customers and company’s analyst',
        'result2': 'Background of global projects',
        'resultinfo': 'Investegy has experience in investment intelligence and consulting of large investment projects. In doing so, we are learning, transforming and being open to solving new challenges every day',
        'firstinfo': 'Created Strategies and Transformation Projects',
        'secondinfo1': 'millions',
        'secondinfo2': 'Amount of investment on our investment projects',
        'thirdinfo': 'Developed financial Models'
    },
    'ua': {
        'home': 'Головна',
        'about': 'Про нас',
        'results': 'Результати',
        'contacts': 'Контакти',
        'consultation': "Зворотній зв'язок",
        'monetization': 'Монетизація бізнесу, інвестори та аналітики',
        'investment': 'Інвестиційний консалтинг в ЄС та Україні',
        'presentation': 'Завантажити презентацію',
        'orderconsultation': 'Замовити консультацію',
        'formbutton': 'Надіслати',
        'text-error': 'Одне з полів заповнене невірно. Перевірте та спробуйте заново.',
        'text-success': 'Дякуємо за ваше звернення! Ваша заявка на консультацію надіслана.',
        'aboutinvestegy': 'Investegy використовує найінноваційніші методи консалтингового аналізу',
        'missions': 'Наша місія',
        'mission1': 'Створити першу міжнародну Українську інвестиційну консалтингову компанію, яка буде всесвітньо відома і буде мати бездоганну репутацію.',
        'goals': 'Наша ціль',
        'goal1': 'Суттєво підвищити рівень інвестиційного консалтингу в Україні для створення додаткових можливостей для реалізації інвестиційних проектів в Україні і в світі.',
        'values': 'Наші цінності',
        'value1': 'Надання професійних консалтингових послуг з детальною увагою до кожного клієнта;',
        'value2': 'Надавати послуги стратегічного консалтингових рішень, які дозволять компаніям досягати максимальних результатів ефективності;',
        'value3': 'Створити довготривалі партнерські стосунки між інвестором та бізнес експертами.',
        'downloadportfolio': 'Завантажити портфоліо',
        'attractionpar': 'Робити правильні речі в правильний час!',
        'attractionbut': 'Розпочати',
        'result1': 'Наша Компанія здатна створити продукт, який  забезпечить успіх нашим клієнтам.',
        'result2': 'Досвід в розробці міжнародних проектів.',
        'resultinfo': 'Investegy має широкий досвід в інвестиційному консалтингу та в розробці великих інвестиційних проектів. Ми постійно підвищуємо наш рівень кваліфікації і самовдосконалюємося, щоб бути завжди готовими до нових викликів.',
        'firstinfo': 'Створених Стратегій та Концепцій Трансформацій.',
        'secondinfo1': 'мільйонів',
        'secondinfo2': 'Обсяг залучених інвестицій завдяки нашим розробкам.',
        'thirdinfo': 'Розроблених інвестиційних моделей.'
    }
};

var arrPlace = {
    'en':{
        'name': 'Name',
        'email': 'Email',
        'request': 'Request'
    },
    'ua':{
        'name': "Ім'я",
        'email': 'Електронна пошта',
        'request': 'Повідомлення'
    }
}

var arrFile = {
    'en':{
        'downloadportfolio': 'files/Yaroslav Pylypchuk CV-1-3-EN.pdf',
    },
    'ua':{
        'downloadportfolio': 'files/Yaroslav Pylypchuk CV-1-3-UA.pdf',
    }
}




$(function() {
    $('.translate').click(function() {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.placehold').each(function(index, element) {
            $(this).attr('placeholder', arrPlace[lang][$(this).attr('key')]);
        });
        $('.langlink').each(function(index, element) {
            $(this).attr('href', arrFile[lang][$(this).attr('key')]);
        });
        $('.brlang').each(function(index, element) {
            $(this).html(arrLang[lang]['secondinfo1'] + "<br>" + arrLang[lang]['secondinfo2']);
        });
    });
});