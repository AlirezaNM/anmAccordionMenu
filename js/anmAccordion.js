(function ($) {

    $.fn.anmAccordion = function (userOptions) {

        var options = $.extend({}, userOptions)

        this.each(function () {

            var elm = $(this);

            elm.click(function () {
                var myContent = $(this).next(".accContent");
                $(".accContent").slideUp();
                if (myContent.css("display") == "none")
                    myContent.slideDown();

            })

        })

    }

})(jQuery)