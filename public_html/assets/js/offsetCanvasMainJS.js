$(document).ready(function () {
    $('html').addClass('js');
    //var navToggle =['<div id="hamburger">&#127828;</div>'].join("");
    var navToggle = ['<div id="hamburger">&#9776; </div>'].join("");
    $("nav").prepend(navToggle);

    $('#hamburger').click(function () {
        $('nav #site_nav').slideToggle();

    });
    $(window).resize(function(){
        var width=$(window).width();
        if(width>655 && $('nav #site_nav').is(':hidden')){
            $('nav #site_nav').removeAttr('style');
        }
    });
});