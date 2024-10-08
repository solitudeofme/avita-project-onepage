$('a#top-header__open-close').click(function () {
    $('#overlay-menu').addClass('show');
})
$('#overlay-menu i.fa-close').click(function () {
    $('#overlay-menu').removeClass('show');
})