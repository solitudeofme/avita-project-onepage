$('a#top-header__open-close').click(function () {
    $('#overlay-menu').toggleClass('show');
})
$('#overlay-menu i.fa-close').click(function () {
    $('#overlay-menu').toggleClass('close');
})