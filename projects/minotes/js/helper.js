$(document).ready(function() {
    if ($("#username").val() != '') {
        $("#password").trigger('select');
    } else {
        $("#username").trigger('select');
    }

    $('.note-btn').click(function() {
        for (var i = 0; i < $('.note-btn').length; i++) {
            $('.note-btn').removeClass('current');
        }
        $(this).addClass('current');
    });
});
