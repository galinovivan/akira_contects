/**
 * Created by root on 29.08.17.
 */


    var arrowButton = $('.scroll_top');

    arrowButton.click(function(e) {
        e.preventDefault();
        $('body').animate({scrollTop: 0}, 800);
    });
    // window.onscroll = function() {
    //   initScrollArrow(arrowButton);
    // };


    function initScrollArrow(arrowEl) {
        var body = $('body');
        if (body.scrollTop() > 3000) {
            arrowEl.show('fast');
        } else {
            arrowEl.hide();
        }
    }

