// var flag = true;

// $(window).on('scroll', function() {

//     var div_counter = window.pageYOffset;
//     var scroll_pos_test = $('#target ').offset().top - window.innerHeight; // set to whatever you want it to be

//     if (div_counter < scroll_pos_test) {
//         //do stuff
//         $('.ach-number span ').each(function() {
//             //console.log();
//             flag = false;
//             $(this).prop('Counter', 0).animate({
//                 Counter: $(this).text()
//             }, {
//                 duration: 8000,
//                 easing: 'swing',
//                 step: function(now) {
//                     $(this).text(Math.ceil(now));
//                     return 1;
//                 }
//             });
//         });
//     }
// });




// $('.number span').each(function() {
//     $(this).prop('Counter', 0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 8000,
//         easing: 'swing',
//         step: function(now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

$(window).scroll(function() {
    if (isElementVisible($('.number'))) {
        //Call From here
        $(window).off('scroll');
        // alert("Hello! I am an alert box!!");
        $('.number span').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 8000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
});


function isElementVisible(elem) {
    var visibleTop = $(window).scrollTop();
    var visibleBottom = visibleTop + $(window).height();

    return ((elem.offset().top + elem.height()) <= visibleBottom);
}