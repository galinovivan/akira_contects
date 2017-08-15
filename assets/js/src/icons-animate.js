/**
 * Created by root on 15.08.17.
 */
(function($) {
    var el = $('#advantageBlock');
    var scroll = getScroll(el);
    console.log(scroll);
    var bodyScroll = $('body').scrollTop();
    window.onscroll = function() {
        var bodyScroll = $('body').scrollTop() + $(window).height();
        if (scroll <= bodyScroll) {
            var icons = $('.animate_icon');
            icons.addClass('border-spin');
        }
    };

    /**
     * @param el {jQuery}
     * @returns {Number|Window|*}
     */
    function getScroll(el) {
        return el.offset().top;
    }
})(jQuery);
