/**
 * Created by root on 15.08.17.
 */
(function($) {

    var icons = $('.animate_icon');
    window.onscroll = function() {
      makeBorderSpin(icons);
    };


    function makeBorderSpin(icons) {
        if (icons.length > 0) {
            icons.each(function(key, value) {
                if (isElemVisible($(this))) {
                    $(this).addClass('border-spin');
                }
            })
        }
    }

    function isElemVisible(elem) {
      var scroll = elem.offset().top;
      var bodyScroll = $('body').scrollTop() + $(window).height() - 300; //+ $(window).height() + 1000;
      return bodyScroll >= scroll;
    };
})(jQuery);
