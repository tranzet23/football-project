
//  FULL PAGE
$(document).ready(function () {
    if ($(window).width() > 1024) {
        $('#fullpage').fullpage({
            // autoScrolling: true,
            sectionSelector: '.section',
            // verticalCentered: true,
        });
    }
});


// tabs

$(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");