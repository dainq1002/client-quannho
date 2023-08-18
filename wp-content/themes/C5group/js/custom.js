/*
Sticky Header Function
*/


jQuery(function () {
    jQuery('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var nav_height = $('.navbar').innerHeight();
        jQuery('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - nav_height
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    jQuery('body').scrollspy({
        target: '.sticky-nav',
        offset: 60
    })

});

jQuery(document).ready(function () {

    jQuery(window).load(function () {
        jQuery(".sticky-nav").sticky({ topSpacing: 0 });
    });


});

/*
Top Scroller Function
*/
jQuery(".top-scroll").hide();
jQuery(function () {
    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() > 500) {
            jQuery('.top-scroll').fadeIn();
        } else {
            jQuery('.top-scroll').fadeOut();
        }
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.theiaStickySidebar').addClass('_theiaStickySidebar');
        } else {
            jQuery('.theiaStickySidebar').removeClass('_theiaStickySidebar');
        }
    });
    jQuery('a.top-scroll').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

jQuery(document).ready(function () {
    jQuery('.nav li.dropdown').hover(function () {
        jQuery(this).addClass('open');
    }, function () {
        jQuery(this).removeClass('open');
    });

});

(function () {
    var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
        isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
        isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

    if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function () {
            var id = location.hash.substring(1),
                element;

            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }

            element = document.getElementById(id);

            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }

                element.focus();
            }
        }, false);
    }
})();

/*
//wow-animated
*/
jQuery(document).ready(function () {
    wow = new WOW({
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100,        // distance to the element when triggering the animation (default is 0)
        mobile: true,             // trigger animations on mobile devices (true is default)
        live: true                // consatantly check for new WOW elements on the page (true is default)
    })
    wow.init();
});

/* Mobile Menu
 ---------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery('#showmenu').click(function () {
        jQuery('#mobilenav').toggleClass('opened');
        jQuery('.panel-overlay').toggleClass('active');
        jQuery('.hamburger', this).toggleClass('is-active');
    });

    jQuery('.panel-overlay').click(function () {
        jQuery('#mobilenav').toggleClass('opened');
        jQuery(this).removeClass('active');
        jQuery('#showmenu .hamburger').removeClass('is-active');
    });

    jQuery('.menu_close').click(function () {
        jQuery('#mobilenav').toggleClass('opened');
        jQuery('.panel-overlay').removeClass('active');
        jQuery('#showmenu .hamburger').removeClass('is-active');
    });

    jQuery("#mobilenav ul.sub-menu").before('<span class="arrow"></span>');

    jQuery("body").on('click', '#mobilenav .arrow', function () {
        jQuery(this).parent('li').toggleClass('open');
        jQuery(this).parent('li').find('ul.sub-menu').first().slideToggle("normal");
    });
});



/* Category Menu
 ---------------------------------------------------------------*/
jQuery(document).ready(function () {
    jQuery("#CategoryBar ul.sub-menu").before('<span class="arrow"></span>');

    jQuery("body").on('click', '#CategoryBar .arrow', function () {
        jQuery(this).parent('li').toggleClass('open');
        jQuery(this).parent('li').find('ul.sub-menu').first().slideToggle("normal");
    });
});
jQuery(document).ready(function ($) {
    var bannerslider = $('#banner-carousel');
    bannerslider.owlCarousel({
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this

        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true,
        lazyLoad: true,
        margin: 0,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplay: true,
        video: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });
});
jQuery(document).ready(function ($) {
    $('#partners-carousel').owlCarousel({
        loop: true,
        nav: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: true,
        lazyLoad: true,
        margin: 20,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplay: true,
        video: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    });
});

jQuery(document).ready(function ($) {
    $('#service-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        lazyLoad: true,
        margin: 30,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplay: true,
        video: true,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1190: {
                items: 3,
            },
            1360: {
                items: 3,
            }
        }
    });
});