(function($) {

	"use strict";


    // preloader
    $(window).on('load', function(){
      $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });


    // Navbar Animation
     jQuery('#main-nav').stellarNav({
        theme: 'light',
        breakpoint: 991,
        openingSpeed: 200,
        closingDelay: 50,
        position: 'right',
        sticky: false
    });

     // Fixd nav script
    $(window).scroll(function(){
        if( $(window).scrollTop()>100 ){
            $('#header-fixed').addClass('fixed-header');
            } else {
            $('#header-fixed').removeClass('fixed-header');
        }
    });

    // Navbar Scroll To Fixed
    $('.sticky-header').scrollToFixed();


    //quick support jquery 
    $('.tooglequicksupport a').click(function(){
        $('.notification-bar').addClass( "highlight" );
    });
    $('.notification-close a').click(function(){
        $('.notification-bar').removeClass( "highlight" );
    });



    // Pogo Slider
    if($('#pogo-slider').length > 0){
            $('#pogo-slider').pogoSlider({
            autoplay: true,
            autoplayTimeout: 5000,
            displayProgess: true,
            targetWidth: 1920,
            // targetHeight: 500,
            responsive: true,
            pauseOnHover: false,
        }).data('plugin_pogoSlider');
    }


    // isotope Active for portfolio
    $(window).on('load', function() {
    
        function sortingGallery() {
            if ($(".sortable-gallery .gallery-filters").length) {
                var $container = $('.gallery-container');
                $container.isotope({
                    filter:'*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
    
                $(".gallery-filters li a").on("click", function() {
                    $('.gallery-filters li .active').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter:selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        sortingGallery();
    
    });



    // Case carousel
    if($('.case-slider').length){
        $('.case-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            center: false,
            // navText: [
            //   '<i class="fa fa-long-arrow-down"></i>',
            //   '<i class="fa fa-long-arrow-up"></i>'
            // ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }


    // service-slider
    if($('.service-slider').length){
        $('.service-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="arrow_left"></i>',
              '<i class="arrow_right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                575:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }


    // Testimonial carousel
    if($('.blog-carousel').length){
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="arrow_left"></i>',
              '<i class="arrow_right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }


     // blog-img-slider
    if($('.blog-img-slider').length){
        $('.blog-img-slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="arrow_left"></i>',
              '<i class="arrow_right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    // Testimonial carousel
    if($('.client-slider').length){
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: false,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 700,
            navText: [
              '<i class="icofont-thin-left"></i>',
              '<i class="icofont-thin-right"></i>'
            ],
            responsive: {
                0: {
                    items: 2,
                    center: false
                },
                480:{
                    items:3,
                    center: false
                },
                600: {
                    items: 3,
                    center: false
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                },
                1200: {
                    items: 6
                }
            }
        })
    }


    // Attorney carousel
    if($('.attorney-slider').length){
        $('.attorney-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:2,
                    center: false
                },
                575:{
                    items:2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }



    // Tab
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
    
    $('.tab ul.tabs li a').click(function (g) { 
        var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
        
        tab.find('ul.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');
        
        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
        
        g.preventDefault();
    } );





    // Background Image Call Script
    if ($('.background-image').length > 0) {
        $('.background-image').each(function () {
            var src = $(this).attr('data-src');
            $(this).css({
                'background-image': 'url(' + src + ')'
            });
        });
    }

    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      });


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });


    //Accordion active
      $(".accordion_head").click(function() {
        if ($('.accordion_body').is(':visible')) {
          $(".accordion_body").slideUp(300);
          $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
          $(this).next(".accordion_body").slideUp(300);
          $(this).children(".plusminus").text('+');
        } else {
          $(this).next(".accordion_body").slideDown(300);
          $(this).children(".plusminus").text('-');
        }
      });






    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });






})(window.jQuery);