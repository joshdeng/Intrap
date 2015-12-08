
function main() {

    (function () {
        'use strict';

        // jQuery to collapse the navbar on scroll
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        $(window).on('resize', (function () {
            if ($(window).width() > 991) {
                $("#location-contact-container").addClass("equalizer");
                bootstrap_equalizer();
            } else {
                $("#location-contact-container").removeClass("equalizer");
            }
        }));
        // Testimonial Slider
        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
         Show Menu on Book
         ======================================*/
        $(window).bind('scroll', function () {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-fixed-top').addClass('on');
            } else {
                $('.navbar-fixed-top').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 80
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });

        $(document).ready(function () {
            $("#testimonial").owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true
            });

        });

        /*====================================
         Portfolio Isotope Filter
         ======================================*/
        $(window).load(function () {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function () {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });

        // ****************************************************************
// counterUp
// ****************************************************************

        $(document).ready(function ($) {

            if ($("span.count").length > 0) {
                $('span.count').counterUp({
                    delay: 10, // the delay time in ms
                    time: 1000 // the speed time in ms
                });
            }
            if ($(window).width() > 991) {
                $("#location-contact-container").addClass("equalizer");
            }
            bootstrap_equalizer();
        });

        /*====================================
         Pretty Photo
         ======================================*/
        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });
        function bootstrap_equalizer() {
            $(".equalizer").each(function () {
                var heights = $(this).find(".watch").map(function () {
                    return $(this).height();
                }).get(),
                        maxHeight = Math.max.apply(null, heights);

                $(".watch").height(maxHeight);
            });
        }
    }());


}
main();