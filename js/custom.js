$(function(){
   
    // Part Start
    
    
    
    
    
    
    
    
    $('.f-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
    });
    
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.navbar').addClass('extra-bg');
        } 
        else {
            $('.navbar').removeClass('extra-bg');
        }
    });

    $('.b2t').on('click', function (){
        $('body,html').animate({scrollTop:0},1000);
    });
    
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.b2t').fadeIn();
        } 
        else {
            $('.b2t').fadeOut();
        }
    });


var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    });
    
    
    
    
    
});