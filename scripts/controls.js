$(function () {
    $("#btn-9").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "9");
        }

    });

    $("#btn-8").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "8");
        }

    });

    $("#btn-7").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "7");
        }

    });

    $("#btn-6").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "6");
        }

    });

    $("#btn-5").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "5");
        }

    });

    $("#btn-4").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "4");
        }

    });

    $("#btn-3").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "3");
        }

    });

    $("#btn-2").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "2");
        }

    });

    $("#btn-1").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "1");
        }

    });

    $("#btn-0").on('click', function (ev) {
        ev.preventDefault();
        if ($('#response').text().length < 4) {
            $('#response').text($("#response").text() + "0");
        }

    });

    $("#btn-erase").on('click', function (ev) {
        ev.preventDefault();
        let texto = $('#response').text();
        $('#response').text(texto.substring(0, texto.length - 1));

    });

})