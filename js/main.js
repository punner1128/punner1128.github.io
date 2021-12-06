$().ready(function (e) {
    var strMapMedia = "";
    var objects = [];
    var areas = [];
    var etcs = [];
    var accounts = [];
    var container = [];
    $('.account_pop').hide();

    //스크롤바
    $(".account_list.account").mCustomScrollbar();

    var accountLength = $('.account_list.account dl').length;
    if (accountLength > 4) {
        $('.account_list.account').addClass('add_scroll');
    } else {
        $('.account_list.account').removeClass('add_scroll');
    }

    $('.copy_btn.all').on('click', function () {

        var idx = $(this).attr('idx');
        var account_number = $("#inputAccountNumber_" + idx).text();

        copyToClipboard(account_number);

        //복사완료 문구
        toast(this, '복사되었습니다.', 1500);
    });

    $('.btn.an_btn.account').on('click', function () {
        fn_AccountClose();
        $('.account_pop.account').show();
    });

    $('.btn.close').on('click', function () {
        fn_AccountClose();
        scrollAble();
    });
});

//스크롤 방지 이벤트
function scrollDisable() {
    $('body').addClass('scroll_off').on('scroll touchmove mousewheel');
}
//스크롤 방지해제 이벤트
function scrollAble() {
    $('body').removeClass('scroll_off').off('scroll touchmove mousewheel');
}
function accOpen() {
    $('.account_pop').show();
    scrollDisable();
}
function accClose() {
    $('.account_pop').hide();
    scrollAble();
}
function fn_AccountClose() {
    $('.account_pop.account').hide();
    scrollDisable();
}
function toast(select, msg, timer) {
    var $elem = $("<p>" + msg + "</p>");

    $(".toast.all").html($elem).show();

    $elem.slideToggle(100, function () {
        setTimeout(function () {
            $elem.fadeOut(function () {
                $(this).remove();
                $('.toast.all').css('bottom', '');
            });
        }, timer);
        return false;
    });

    $('.toast.all').stop().animate({ 'bottom': '5%' });
}        
function copyToClipboard(text) {
    var aux = document.createElement("textarea");
    aux.value = text;
    document.body.appendChild(aux);
    aux.select();
    aux.setSelectionRange(0, 9999);
    document.execCommand("copy");
    document.body.removeChild(aux);
}

// Kakao.init('4d7c239dbb73f9e96d04edc2385c924b');