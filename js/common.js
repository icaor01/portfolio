$(function () {
    $('.header__menu-toggle').on('click', function () {
        $('.header__menu-toggle-bar, .header__menu').toggleClass('show');
    });

    $('.js-page-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
        $('.js-page-top').fadeIn();
        } else {
        $('.js-page-top').fadeOut();
        }
    });

    $('.js-page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
})