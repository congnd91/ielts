(function ($) {


    $(document).on('ready', function () {

        "use strict";

        /**Preload**/
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();

        });

        $('.nav-icon').click(function () {
            $(this).toggleClass('open');
            $('body').toggleClass("open-menu");
        });
        /**Menu**/


        $('.menu-res li.has-child').on('click', function (event) {
            event.stopPropagation();
            var submenu = $(this).find(" > ul");
            if ($(submenu).is(":visible")) {
                $(submenu).slideUp();
                $(this).removeClass("open-submenu-active");
            } else {
                $(submenu).slideDown();
                $(this).addClass("open-submenu-active");
            }
        });

        $('.menu-res li.menu-item-has-children > a').on('click', function () {
            //  return false;
        });


        //Reading page

        if ($('.api').length) {

            if (window.innerWidth <= 768) {
                var split = Split(['#slpit-one', '#slpit-two'], {
                    sizes: [50, 50],
                    minSize: 0,
                    direction: 'vertical',
                    onDrag: function () {
                        $(".split-item").getNiceScroll().resize();
                    },



                });

            } else {
                var split = Split(['#slpit-one', '#slpit-two'], {
                    sizes: [50, 50],
                    minSize: 0,
                    onDrag: function () {
                        $(".split-item").getNiceScroll().resize();
                    },



                });

            }
            setTimeout(function () {
                $(".split-item").getNiceScroll().resize();
            }, 400);

        }
        //split
        $(".split-item").niceScroll({
            autohidemode: 'false'
        });

        $('.qp-items').niceScroll({
            autohidemode: 'true'
        });

        $('.rf-button-pallete').click(function () {

            if ($('.question-panel').is(':visible')) {
                $('.question-panel').removeClass("show");

            } else {
                $('.question-panel').addClass("show");
                $('.qp-items').getNiceScroll().resize();

            }

        });

        $('.show-test-menu').click(function () {
            $('.reading-header').toggleClass("show-test");


            if ($('.reading-header').hasClass("show-test")) {
                $(this).html(" <em></em>  Hide Test Info");
            } else {
                $(this).html(" <em></em>  Show Test Info");
            }
        });

        if ($('.api').length) {
            $(window).bind('resize', function () {
                var width = window.innerWidth;
                var check = false;
                if (width <= 768) {
                    check = true;

                } else {
                    check = false;

                }
                if (check) {
                    split.destroy();
                    split = Split(['#slpit-one', '#slpit-two'], {
                        sizes: [50, 50],
                        minSize: 20,
                        direction: 'vertical',
                        onDrag: function () {
                            $(".split-item").getNiceScroll().resize();
                        },
                    });

                } else {
                    split.destroy();
                    split = Split(['#slpit-one', '#slpit-two'], {
                        sizes: [50, 50],
                        minSize: 20,
                        onDrag: function () {
                            $(".split-item").getNiceScroll().resize();
                        },
                    });

                }
            }).trigger('resize');

        }




        //listing page

        $('#qp-afix').affix({
            offset: {
                top: 290,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true) + 100)
                }
            }
        })

        //show-nodepad
        $('.btn-show-note').click(function () {

            var id = $(this).attr("data-id");
            if ($(id).is(":visible")) {
                $(id).removeClass("show");
                $(this).removeClass("active");
                $(this).html(" <strong></strong> Show Notepad");

            } else {

                $(id).addClass("show");
                $(this).addClass("active");
                $(this).html(" <strong></strong> Hide Notepad");
            }


        });

        //text-size
        $('.btn-textsize').click(function () {
            $('body').addClass("text-big");

        });


        //tips page


        var owl_tip = $('.owl-tip')
        $(owl_tip).owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 1


        });


        /** Back To Top**/
        var win = $(window);
        var totop = $('.totop');
        win.on('scroll', function () {
            if ($(this).scrollTop() >= 300) {
                $(totop).addClass("show");
            } else {
                $(totop).removeClass("show");
            }
        });
        $(totop).on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1500);
        });


    });
})(jQuery);
