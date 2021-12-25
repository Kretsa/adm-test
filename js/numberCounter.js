
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