
import 'slick-slider';
(() => {
    let $menu = $('.menu__list');
    $('.menu__btn').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $menu.toggleClass('menu__list_active');
        // if ($menu.hasClass('menu__list_active')) {
        // disablePageScroll();
        //     return;
        // }
        // enablePageScroll();
    });

    $(window).on('click', function (e) {
        if ($menu.hasClass('menu__list_active') && !e.target.closest('.menu__list')) {
            e.preventDefault();
            $menu.removeClass('menu__list_active');
            // enablePageScroll();
        }
    });

    $('.header__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    // centerMode: true,
                    // centerPadding: '40px',
                    // slidesToShow: 3
                }
            },
        ]
    });

})();
