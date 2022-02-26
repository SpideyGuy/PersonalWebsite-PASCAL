window.onload = function(event) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("test-pb");
        var width = 1;
        var id = setInterval(frame, 30);

        function frame() {
            if (width >= 100) {
                elem.classList.add("progress-bar-success");
                elem.innerText = "Successful Person"
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerText = width + "%"
            }
        }
    }

    $(".dropdown-menu li").click(function() {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });
};