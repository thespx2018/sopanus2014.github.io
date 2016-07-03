/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 70
});
if ($('body').scrollTop() > 150)
{
    $('.navbar-fixed-top').addClass('navbar-shrink');
}
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
function refreshScrollSpy() {
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    }); 
};
if ($('.autoplay').length > 0) {
$('.autoplay').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
}
$('header,.intro-text').css({'height':($(window).height())+'px'});
    $(window).resize(function(){
        $('header,.intro-text').css({'height':($(window).height())+'px'});
    });