$(function() {

    //  ------------------------ click ------------------------
    // $('#btn-click').click(function(){
    //     $('.red-box').fadeTo(2000, 0.5);
    // })

    // $('.red-box').click(function(){
    //     $(this).fadeTo(2000, 0.5);
    // })

    // // ------------------------- hover ------------------------

    // // $('#btn-hover').hover(function(){
    // //     alert(':))');
    // // })

    // $('.green-box').hover(function(){
    //     $(this).text('clmao')
    // })

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

    // $('html').on('click keydown', function() {
    //     console.log('adu dark quá');
    // })

    // var images = [
    //     'image/image-1.jpg',
    //     'image/image-2.jpg',
    //     'image/image-3.jpg',
    // ]

    // var i = 0;

    // var imageGallery = $('.gallery').find('img');

    // imageGallery.on('click', slide);

    // function slide()
    // {
    //     i = (i + 1) % images.length;
    //     $(this).fadeOut(function(){
    //         $(this).attr('src', images[i]).fadeIn();
    //     });
    // }

    // --------------- Sự kiện được ủy quyền (delegated event) ----------------------------
    // $('p').click(function(){
    //     $(this).slideUp();
    // })

    // $('#content').append('<p>Hello Phạm Ngọc Bảo An</p>');

    // ========================= (delegated event) ============== //

    // $('#content').on('click', 'p' , function(){
    //     $(this).slideUp();
    // });

    // $('#content').append('<p>Hello Phạm Ngọc Bảo An</p>');

    // $('body').on('mouseenter', 'li', function() {
    //     $(this).css('background-color', '#AADD00');
    // });

    // ========================= Truyền dữ liệu bổ sung cho sự kiện ------------------------

    // $('#btn-click').click({
    //     user: "Phạm Ngọc Bảo An",
    //     domain: "baoanstore.xyz"
    // }, function(event) {
    //     // hàm ẩn danh được sử dụng để sử lí sự kiện click
    //     greetUser(event.data);
    // });

    // function greetUser(userData) {
    //     var username = userData.user || "Anonymous";
    //     var domain = userData.domain || "Example.com";

    //     alert("Welcome back " + username + " from " + domain + "!!!");
    // }
    
    // ======================== Gallery hình ảnh =============================================

    // var galleryImage = $('.gallery').find('img');
    // galleryImage.css('width', "33%").css('opacity', '0.7');

    // galleryImage.mouseenter(function() {
    //     $(this).stop().fadeTo(500, 1);
    // });

    // galleryImage.mouseleave(function() {
    //     $(this).stop().fadeTo(500, 0.7);
    // });
    
    // galleryImage.click(function() {
    //     var source = $(this).attr("src");
    //     var image = $('<img>').attr('src', source).css('width', '100%');
    //     $(".lightbox").empty().append(image).fadeIn(1000);
    // });

    // $('.lightbox').click(function() {
    //     return $(this).stop().fadeOut(200)
    // })

    // ====================== Sử lí các sự kiện keyDown và keyUp ============================
    // $(document).keydown(function(event) {
    //     console.log(event.which);
    // });

    // var ARROW_RIGHT = 39;

    // $(document).keydown(function(event){
    //     if(event.which == ARROW_RIGHT) {
    //         $('.blue-box').stop().animate({
    //             marginTop: '+=10px'
    //         });
    //     }
    // });

    // ==================== focus - blur ---------------------------------------------------

    var inputFields = $('input:text, input:password, textarea');
    inputFields.focus(function() {
        $(this).css("box-shadow", "0 0 4px #666");
    });

    inputFields.blur(function() {
        $(this).css("box-shadow", "none");
    });

    $('#name').blur(function() {
        var text = $(this).val();
        if(text.lenght < 3) {
            $(this).css("box-shadow", "0 0 4px #811");
        } else {
            $(this).css("box-shadow", "0 0 4px #FF0000");
        }
    })

//     // ++++++++++++++++++++ sử dụng sự kiện change ---------------------------------------
//      $('#selectInput').change(function() {
//             var value = $(this).val();
//             $('#selectOutput').text('Bạn đã chọn: ' + value);
//         });

//     //  ========================= chọn ảnh và load ảnh =================================

//     $('#imgFile').change(function(event){
//     var input = event.target;
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             $('#imgPreview').attr('src', e.target.result).show();
//         }

//         reader.readAsDataURL(input.files[0]);
//     }
// });

    // ======================== sử lí submit form ==========================================

    // $('#form').submit(function(event){
    //     var inputValue = $('#message');

    //     if(inputValue.val().trim() == "") {
    //         inputValue.css('box-shadow', '0 0 4px #811');
    //         event.preventDefault();
    //     } else {
    //         console.log(inputValue.val());
    //         event.preventDefault();
    //     }
    // });

    // ================= hoàn thành form submit =======================================

    $("#form").submit(function(event) {
    // First, read out all entered values.
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checked = $("#checkbox").is(":checked");

    // Then we use our validation functions (defined below) to check each input.
    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
  });

  // == NEW PART ==
  // In addition to the previous form validation code, we now provide faster
  // feedback to the user, namely when moving to the next input element.
  enableFastFeedback($("#form"));

  function enableFastFeedback(formElement) {
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function() {
      var name = $(this).val();
      highlight($(this), isValidName(name));
    });

    passwordInput.blur(function() {
      var password = $(this).val();
      highlight($(this), isValidPassword(password));
    });

    messageInput.blur(function() {
      var message = $(this).val();
      highlight($(this), isValidMessage(message));
    });

    checkboxInput.change(function() {
      var isChecked = $(this).is(":checked");
      highlight($(this), isChecked);
    });
  }

  function highlight(element, isValid) {
    var color = "#811";  // red
    if (isValid) {
      color = "#181";  // green
    }

    element.css("box-shadow", "0 0 4px " + color);
  }

  // In the following, we define helper functions that each validate
  // one of the inputs. These will be used further down by our validation
  // functions.

  function isValidName(name) {
    return name.trim().length >= 2;
  }

  function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
  }

  function isValidMessage(message) {
    return message.trim() !== "";
  }

  // Next, we define the actual validation functions which use the helpers from
  // above. These validation functions add a hint for the user for each invalid
  // input and prevent the form from submitting if the input is invalid.

  // First, show a hint if the name is not valid or remove the hint if it's
  // now valid.
  function validateNameField(name, event) {
    if (!isValidName(name)) {
      $("#name-feedback").text("Please enter at least two characters");
      event.preventDefault();
    } else {
      $("#name-feedback").text("");
    }
  }

  // Do the same for the other inputs.
  function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
      $("#password-feedback").text("The password should have at least 6 characters and contain a number");
      event.preventDefault();
    } else {
      $("#password-feedback").text("");
    }
  }

  function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
      $("#message-feedback").text("Please enter a message.");
      event.preventDefault();
    } else {
      $("#message-feedback").text("");
    }
  }

  function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this.");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
  }

});
