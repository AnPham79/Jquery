$(function() {
    var imageGallery = $('.gallery').find('img').first();

    var images = [
        'image/image-1.jpg',
        'image/image-2.jpg',
        'image/image-3.jpg',
    ];

    var i = 0;

    setInterval(function() {
        i = (i + 1) % images.length;
        imageGallery.fadeOut(function() {
            $(this).attr('src', images[i]);
            $(this).fadeIn();
        });
    }, 1000);
});
