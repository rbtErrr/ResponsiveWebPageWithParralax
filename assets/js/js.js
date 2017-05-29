/**
 * Created by mk_1 on 26/5/17.
 */

/**
 * Created by mk_1 on 5/5/17.
 */

$(".menu-wrapper").click(function () {
    $(".top-bar").toggleClass("active");
});


$(window).scroll(function () {

    var st = $(this).scrollTop() / 20;
    // st = st >= 80 ? 80 : st;
    console.log($(this).scrollTop());
    console.log($('.main-content'));


    $(".main-content").css({
        "transform": "translate(0%, -" + Math.floor(st) + "%)"
    });


});

