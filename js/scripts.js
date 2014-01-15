// Slide effect on sections


function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}

if (!detectmob()) {
    new cbpScroller(document.getElementById('cbp-so-scroller'));
}

jQuery(document).ready(function() {


    //Function to prevent Default Events
    function pde(e) {
        if (e.preventDefault)
            e.preventDefault();
        else
            e.returnValue = false;
    }

    // Animate the header components
    $(window).load(function() {
        jQuery('#header-photo').delay(100).animate({
            opacity: '1',
            'margin-top': '0'
        }, 1000, 'easeInOutCubic', function() {
            jQuery('#header h1').delay(-200).animate({
                opacity: '1',
                'padding-top': '0'
            }, 600, 'easeInOutCubic', function() {
                jQuery('#header p').animate({
                    opacity: '1'
                }, 400, 'easeInOutCubic');
            });
        });

        /**/
        if (detectmob()) {
            $("#contact").removeClass("cbp-so-section cbp-so-init");
            $("#services").removeClass("cbp-so-section cbp-so-init");
            $("#about").removeClass("cbp-so-section cbp-so-init");
        }

    });

    //Collapse navigation on click (Bootstrap 3 is missing it)
    $('.nav a').on('click', function() {
        $('#my-nav').removeClass('in').addClass('collapse');
    });

    // Minify the Nav Bar
    $(document).scroll(function() {
        var position = $(document).scrollTop();
        var headerHeight = $('#header').outerHeight();
        if (position >= headerHeight - 100) {
            $('.navbar').addClass('minified');
        } else {
            $('.navbar').removeClass('minified');
        }


        // Parallax effect on #Header
        $(".jumbotron .container").css({
            'opacity': (1 - position / 500)
        });


        // Show "Back to Top" button
        if (position >= headerHeight - 100) {
            $('.scrolltotop').addClass('show-to-top');
        } else {
            $('.scrolltotop').removeClass('show-to-top');
        }

    });


    // Nice scroll to DIVs
    $('.navbar-nav li a').click(function(evt) {
        var place = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(place).offset().top
        }, 1200, 'easeInOutCubic');
        pde(evt);
    });


    // Scroll down from Header
    $('#header p a').click(function(evt) {
        var place = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(place).offset().top
        }, 1200, 'easeInOutCubic');
        pde(evt);
    });


    // Scroll on Top
    $('.scrolltotop, .navbar-brand').click(function(evt) {
        $('html, body').animate({
            scrollTop: '0'
        }, 1200, 'easeInOutCubic');
        pde(evt);
    });


    // Testimonial slider
    jQuery(function() {
        jQuery('#da-slider').cslider({
            bgincrement: 0
        });
    });


    // Portfolio filterable grid
    jQuery('#portfolio-grid').mixitup({
        targetSelector: '.portfolio-mix',
    });


    // PrettyPhoto
    $('#about .round-outline a').prettyPhoto();


});

