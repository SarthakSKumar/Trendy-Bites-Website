$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $(".navbar-top").css("background", "#0e0e0e");
            $(".logo").css("height", "71px");
            $(".logo").css("width", "93px");
            $(".logo").css("margin-top", "5px");
            $(".logo").css("margin-right", "250px");
            $(".logo").css("transition", "0.7s");
            $(".navbar-top").css("transition", "0.3s");
        }

        else {
            $(".navbar-top").css("background", "transparent");
            $(".logo").css("height", "142px");
            $(".logo").css("width", "186px");
            $(".logo").css("margin-top", "80px");
            $(".logo").css("margin-right", "200px");
        }
    })
})