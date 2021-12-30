(() => {
    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    arrows: false,
                    vertical: false,
                    slidesToShow: 3,
                    dots: true
                    // centerMode: true,
                },
                breakpoint: 640,
                settings: {
                    arrows: false,
                    vertical: false,
                    slidesToShow: 1,
                    dots: true
                },
            }
        ]
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
    });

})();
