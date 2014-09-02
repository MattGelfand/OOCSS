/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
    if ($('.wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('.wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('.wrapper').addClass('show-nav');
    }

    //$('.wrapper').toggleClass('show-nav');
}