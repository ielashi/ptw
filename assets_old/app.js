// Use following syntax to prepend required libraries/scripts
// Use **/*.js if you don't need to follow a specific order
// You can override the order by requiring the JS file before the global require
//=require vendor/**/jquery.min.js
//=require vendor/**/*.js
//=require modules/**/*.js
(function ($) {
    "use strict";


    // video popup
    var html5lightbox_options = {
        watermarklink: ""
    };

    $(".html5lightbox").html5lightbox(html5lightbox_options);


    // testimonial-3
    $('.testimonial-three .testimonial').slick({
        autoplay: true,
        slidesToShow: 2,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    // on reveal
    /*window.sr = ScrollReveal();
    sr.reveal('.reveal, .reveal-yes, .faq-list, .feature__list', {
        duration: 1000,
        delay: 0,
        scale: 1,
        opacity: .2,
        easing: 'ease-in-out',
    });*/



    // pricing
    $(".prcing-table").ready(function () {
        $(".prcing-table").parent().parent().css("align-items", "center")
    });

    // pricing value change
    $('.tab__annual').click(function () {
        $('.price_annual').removeClass('hide');
        $('.price_monthly').removeClass('active');
    });

    $('.tab__monthly').click(function () {
        $('.price_monthly').addClass('active');
        $('.price_annual').addClass('hide');
    });

    // pricing tab
    $(document).on('click', '.pricing-tab-list__item', function () {
        $('.current').removeClass('current');
        $(this).addClass('current');
    });


    function navigationPortraitMenuHelper() {

        if( ! $('.navigation__portrait').hasClass('menu-helper-added') ) {

            $('.navigation-menu li').each(function(i,e) {
                if( $(e).hasClass('menu-item-has-children') ) {
                    $(e).append('<span class="menu-opener"><i class="fa fa-angle-down"></i></span>');
                    $(e).toggleClass('menu-active');
                }
            });

            $('.navigation__portrait').addClass('menu-helper-added');

        }


        $('body').on('click', '.menu-opener', function() {
            $(this).closest('li').children('.sub-menu').slideToggle();
        });

    }

    var windowWidth = $(window).width();

    if( windowWidth < 1030 ) {
        navigationPortraitMenuHelper();
    }

    if( windowWidth > 480 ) {
        $(".faq-sidebar").stick_in_parent({
            parent: '.elementor-row',
            offset_top: 100
        });
    }

    $(".faq-sidebar-list__item a").on('click', function () {
        $('.faq-sidebar-list__item a').removeClass('active');
        $(this).addClass('active');
    });


    // faq smooth scroll
    $('.faq-sidebar a').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '150';
        $('.header').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200);

        event.preventDefault();
    });


    // Color Switch Toggler

    $(".switcher__toggler").on("click", function() {
        $(".switcher").toggleClass("switcher__is-open")
    }),

    $(".tab-color").on("click", function() {
        $(".switcher-gradient").removeClass("active"),
        $(".switcher-color").addClass("active"),
        $(".tab-gradient").removeClass("active"),
        $(this).addClass("active")
    }),

    $(".tab-gradient").on("click", function() {
        $(".switcher-color").removeClass("active"), $(".switcher-gradient").addClass("active"), $(".tab-color").removeClass("active"), $(this).addClass("active")
    }),

    $(".switcher-tab__color button").on("click", function() {
        var t = $(".tab-color-clone").find(".active");
        0 < t.length && $("body").removeClass(t.attr("data-theme")),
        $("body").addClass($(this).attr("data-theme")),
        $(".switcher-tab__color button").removeClass("active"),
        $(this).addClass("active")
    }),

    $(".tab-full").on("click", function() {
        $(".switcher-boxed").removeClass("active"), $("body").removeClass("canvas-boxed"), $(".tab-boxed").removeClass("active"), $(this).addClass("active")
    }),

    $(".tab-boxed").on("click", function() {
        $(".switcher-boxed").addClass("active"), $("body").addClass("canvas-boxed"), $(".tab-full").removeClass("active"), $(this).addClass("active")
    }),

    $(".switcher-tab__pattern button").on("click", function() {
        var t = $(".switcher-boxed").find(".active");
        0 < t.length && $("body").removeClass(t.attr("data-theme")), $("body").addClass($(this).attr("data-theme")), $(".switcher-tab__pattern button").removeClass("active"), $(this).addClass("active")
    });

})(jQuery);
