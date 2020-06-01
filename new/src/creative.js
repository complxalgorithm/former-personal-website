if($(window).width() > 1316) {
    $(function() {
        // creative page mini nav
        $('#creative-tabs').addClass('flex-sm-column');
        $('#creative-tabs').css("float", "left");
    });
}

// to center the date in each card on creative page
$('.card-body').css("width", "100%");
$('.card-body div > p').css({"text-align": "center", "font-style": "italic"});