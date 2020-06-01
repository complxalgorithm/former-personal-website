$(document).ready(function() {
    $("#contactModal").one('shown.bs.modal', function() {
        var para = document.getElementById('email-p');
        var uname = 'scsandman6496';
        var eserve = 'gmail.com';
        var email = uname + '@' + eserve;
    
        para.innerHTML += 'for programming-related and other personal inquiries: ' + '<a href=mailto:' + email + '>' + email + '</a>';
    })
});