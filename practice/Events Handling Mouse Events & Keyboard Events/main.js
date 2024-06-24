$(function() {

    //  ------------------------ click ------------------------
    $('#btn-click').click(function(){
        $('.red-box').fadeTo(2000, 0.5);
    })

    $('.red-box').click(function(){
        $(this).fadeTo(2000, 0.5);
    })

    // ------------------------- hover ------------------------

    // $('#btn-hover').hover(function(){
    //     alert(':))');
    // })

    $('.green-box').hover(function(){
        $(this).text('clmao')
    })

    //----------------------- di chuột vào ----------------------

    // $('.blue-box').mouseenter(function() {
    //     $(this).stop().fadeTo(500, 0.5);
    // });

    // $('.blue-box').mouseleave(function() {
    //     $(this).stop().fadeTo(500, 1);
    // });

    // hover HandleIn, HandleOut
    // $('.blue-box').hover(function(){
    //     $(this).stop().fadeTo(500, 0.7);
    // }, function(){
    //     $(this).stop().fadeTo(500, 1);
    // })

    // ------------------- Thêm cùng 1 trình sử lí cho sự kiện ------

    $('html').on('click keydown', function() {
        console.log('adu dark quá');
    })

    var images = [
        'image/image-1.jpg',
        'image/image-2.jpg',
        'image/image-3.jpg',
    ]

    var i = 0;

    var imageGallery = $('.gallery').find('img');

    imageGallery.on('click', slide);

    function slide()
    {
        i = (i + 1) % images.length;
        $(this).fadeOut(function(){
            $(this).attr('src', images[i]).fadeIn();
        });
    }

    // --------------- Sự kiện được ủy quyền (delegated event) ----------------------------
    // $('p').click(function(){
    //     $(this).slideUp();
    // })

    // $('#content').append('<p>Hello Phạm Ngọc Bảo An</p>');

    // ========================= (delegated event) ============== //

    $('#content').on('click', 'p' , function(){
        $(this).slideUp();
    });

    $('#content').append('<p>Hello Phạm Ngọc Bảo An</p>');

    $('body').on('mouseenter', 'li', function() {
        $(this).css('background-color', '#AADD00');
    });


});
