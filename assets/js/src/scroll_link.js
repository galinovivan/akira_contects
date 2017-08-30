/**
 * Created by root on 30.08.17.
 */
(function( $ ) {


    $(document).ready(function() {

        initScrollLink();

        /**
         *
         */
        function initScrollLink() {
            var $scrollLink = $('.scroll_link');
            $scrollLink.each(function(key, value) {
                $(this).click(function(e) {
                    e.preventDefault();
                    makeScrollLink($(this));
                })
            })
        }
        /**
         * @param {jQuery} $link
         */
        function makeScrollLink($link) {
            var target = $link.attr('href') || $link.attr('data-scroll-target');
            var $elTarget = $(target);
            var scroll = getScroll($elTarget);
            var $body = $('body');
            $body.animate({scrollTop: scroll}, 800);

        }

        /**
         *
         * @param {jQuery} $el
         * @returns {Integer}
         */
        function getScroll($el) {

             return $el.offset().top - 325;
        }



    });



})(jQuery);