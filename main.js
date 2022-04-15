$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar-top").css("background", "black");
            $(".logo").css("height", "142px");
            $(".logo").css("width", "186px");

            $(".navbar-top").css("transition", "0.3s");
        }

        else {
            $(".navbar-top").css("background", "transparent");
            $(".navbar-top").css("transition", "0.3s");
        }
    })
})