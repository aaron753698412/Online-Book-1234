$(document).ready(function() {
    $('#proxyForm').submit(function(e) {
        e.preventDefault();
        var url = $('#url').val();
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/' + url;
        $('#proxyFrame').attr('src', proxyUrl);
        $('#proxyContent').show();
        $('#proxyFrame').iFrameResize();
    });
});
