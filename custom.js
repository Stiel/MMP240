$(document).ready(function () {
    
    $('.hide-title img').mouseenter(function () {
        $(this).siblings().animate({
            "opacity": "1"
        }, 800)
    });

    $('.hide-title img').mouseleave(function () {
        $(this).siblings().animate({
            "opacity": "0"
        }, 800);
    });
                  
});




       



