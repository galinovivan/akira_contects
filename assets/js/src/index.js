$(document).ready(function() {
    var arrowButton = $('.scroll_top');
    var icons = $('.animate_icon');


    window.onscroll = function() {
        makeBorderSpin(icons);
        initScrollArrow(arrowButton);
    };
});