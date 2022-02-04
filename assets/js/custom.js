window.onload = function(event) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("html-progress-bar");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 70) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }

    var j = 0;
    if (j == 0) {
        j = 1;
        var elem_css = document.getElementById("css-progress-bar");
        var width_css = 1;
        var id_css = setInterval(frame_css, 10);

        function frame_css() {
            if (width_css >= 50) {
                clearInterval(id_css);
                i = 0;
            } else {
                width_css++;
                elem_css.style.width = width_css + "%";
            }
        }
    }

    var k = 0;
    if (k == 0) {
        k = 1;
        var elem_js = document.getElementById("js-progress-bar");
        var width_js = 1;
        var id_js = setInterval(frame_js, 10);

        function frame_js() {
            if (width_js >= 30) {
                clearInterval(id_js);
                i = 0;
            } else {
                width_js++;
                elem_js.style.width = width_js + "%";
            }
        }
    }

    var l = 0;
    if (l == 0) {
        l = 1;
        var elem_php = document.getElementById("php-progress-bar");
        var width_php = 1;
        var id_php = setInterval(frame_php, 10);

        function frame_php() {
            if (width_php >= 55) {
                clearInterval(id_php);
                i = 0;
            } else {
                width_php++;
                elem_php.style.width = width_php + "%";
            }
        }
    }
};