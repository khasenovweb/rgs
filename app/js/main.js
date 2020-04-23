$(document).ready(function () {
    ymaps.ready(init);
    var myMapAll;
    function init() {
        myMapAll = new ymaps.Map("contacts__map", {
            center: [55.876314, 37.566844],
            zoom: 17,
        });

        var myPlacemark_azs_1 = new ymaps.Placemark([55.876314, 37.566844], {
            hintContent: "Русградстрой",
            balloonContentHeader: "Русградстрой",
            balloonContentBody: "<p></p>",
        });
        myMapAll.geoObjects.add(myPlacemark_azs_1);
    }

    $("[ data-click='scroll']").mPageScroll2id({
        scrollSpeed: 300,
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".upbtn").addClass("active");
        } else {
            $(".upbtn").removeClass("active");
        }
    });

    $(".catalog__head__item").each(function (i, el) {
        var def = $(el)
            .children(".catalog__head__item__icon")
            .attr("data-icon-default");
        $(el)
            .children(".catalog__head__item__icon")
            .css("background-image", "url(" + def + ")");
    });

    $(".catalog__head__item").hover(
        function () {
            var active = $(this)
                .children(".catalog__head__item__icon")
                .attr("data-icon-active");
            $(this)
                .children(".catalog__head__item__icon")
                .css("background-image", "url(" + active + ")");
        },
        function () {
            var def = $(this)
                .children(".catalog__head__item__icon")
                .attr("data-icon-default");
            $(this)
                .children(".catalog__head__item__icon")
                .css("background-image", "url(" + def + ")");
        }
    );

    $('[data-click="catalog-open"]').click(function () {
        event.preventDefault();
        $('[data-modal="catalog"]').toggle();
        $("body").addClass("hidden");
    });

    $('[data-click="catalog-close"]').click(function () {
        $('[data-modal="catalog"]').hide();
        $("body").removeClass("hidden");
    });

    $(".categorypage__item").click(function () {
        if ($(event.target).closest(".categorypage__item__more").length) return;
        $(this).toggleClass("active");
        $(this).find(".categorypage__item__more").toggle();
    });

    $("[data-value-minus]").click(function () {
        var id = $(this).attr("data-value-minus");
        var val = $('[data-value-input="' + id + '"]').val();
        if (val > 1) {
            $('[data-value-input="' + id + '"]').val(Number(val) - 1);
        }
    });
    $("[data-value-plus]").click(function () {
        var id = $(this).attr("data-value-plus");
        var val = $('[data-value-input="' + id + '"]').val();
        if (val < 9999) {
            $('[data-value-input="' + id + '"]').val(Number(val) + 1);
        }
    });

    //Табы
    $("[data-tablink]").eq(0).addClass("active");
    $("[data-tabitem]").hide();
    $("[data-tabitem]").eq(0).show();
    $("[data-tablink]").click(function () {
        var id = $(this).attr("data-tablink");
        $("[data-tabitem]").hide();
        $("[data-tabitem='" + id + "']").show();
        $("[data-tablink]").removeClass("active");
        $(this).addClass("active");
    });
    //END Табы
});
