var imagesCount = 3;    // images count
var interval = 5000;    // in milliseconds

$(document).ready(function () {
    setTimeout(randomPicture, interval);
});

function randomPicture() {
    var rand = Math.floor(Math.random()*imagesCount)+1;
    var imgPreloadLeft = new Image();
    var imgPreloadRight = new Image();
    $(imgPreloadLeft).attr({src: "img/wedding-left-"+rand+".jpg"});
    $(imgPreloadRight).attr({src: "img/wedding-left-"+rand+".jpg"});

    $(imgPreloadLeft).one("load", function(){
        $(imgPreloadRight).one("load", function() {
            $('#left').css('background-image', 'url("img/wedding-left-' + rand + '.jpg")');
            $('#right').css('background-image', 'url("img/wedding-right-' + rand + '.jpg")');
            setTimeout(randomPicture, interval);
        });
    });

}