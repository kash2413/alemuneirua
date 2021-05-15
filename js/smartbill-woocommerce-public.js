(function ($) {
    'use strict';

    /**
     * All of the code for your public-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */
    $(document).ready(function () {
        try {
            if (smartbill_billing) {
                if ($("#smartbill_billing_type").val() == 'pj') {
                    $("#smartbill_show_pj").css("display", 'block');
                    $("#billing_company_field").css("display", 'none');
                }
                $("#smartbill_billing_type").change(function () {
                    if ($(this).val() == 'pj') {
                        $("#smartbill_show_pj").css("display", 'block');
                        $("#billing_company_field").css("display", 'none');
                    } else {
                        $("#smartbill_show_pj").css("display", 'none');
                        $("#billing_company_field").css("display", 'block');
                    }
                });
            }

        } catch (error) { }

        try {
            $("#smartbill_company_details-checkbox").on("change", function () {
                $("div.smartbill_company_details").hide();
                if ($(this).is(":checked")) {
                    $("div.smartbill_company_details").slideDown();
                }
            }).trigger("change");
        } catch (ex) { }
    });
})(jQuery);
