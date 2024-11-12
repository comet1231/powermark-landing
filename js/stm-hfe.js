"use strict";

(function ($) {

    $(document).ready(function () {
        $("header [data-elementor-id!=''][data-elementor-id]").each(function () {
            let id = $(this).attr('data-elementor-id');
            header_position(window["consulting_ehf_position_".concat(id)]);
        });
    });

    function header_position(settings) {
        let $selector = $('body');

        if (!$selector.length) return false;

        if (settings['header_position'] === 'absolute') $selector.addClass('consulting_ehf_position_absolute');
        if (settings['header_position'] === 'sticky') $selector.addClass('consulting_ehf_position_sticky');
        if (settings['header_position'] === 'fixed') $selector.addClass('consulting_ehf_position_fixed');
    }

})(jQuery);