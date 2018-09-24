$(document).ready(function () {
    var width = $(window).width();
    $(window).resize(function () {
        width;
        if (width > 655 && $('nav #site_nav').is(':hidden')) {
            $('nav #site_nav').removeAttr('style');
        }
    });
    $('html').addClass('js');
    //var navToggle =['<div id="hamburger">&#127828;</div>'].join("");
    var navToggle = ['<div id="hamburger">&#9776; </div>'].join("");
    $("nav").prepend(navToggle);


    $('#hamburger').click(function () {
        $('.js nav #site_nav').toggle('slide');
    });
    $('.js nav #site_nav li').click(function () {
        if (width < 655) {
            $('.js nav #site_nav').toggle('slide');
        }
    })
    $('article').fitVids();
    $('.mySlider').slick({
        autoplay: true,
        autoplaySpeed: 1200
    });
    $('.mySlider2').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }
        ]
    });
});