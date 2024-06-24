$(function () {
    // opacity từ trái sang phải
    // $(".red-box").fadeTo(1000, 0.2);
    // $(".green-box").fadeTo(2000, 0.5);
    // $(".blue-box").fadeTo(3000, 0.8);

    // ẩn rồi hiện
    // $(".blue-box").fadeToggle();
    // $(".blue-box").fadeToggle();

    // ẩn sau 2s và hiện sau 2s
    // $(".blue-box").hide(2000);
    // $(".blue-box").show(2000);

    // slide element up and down
    // $(".blue-box").slideUp(2000);
    // $(".blue-box").slideDown(2000);


    // $(".p").hide(1000);
    // $(".p").slideDown(2000);

// ---------------------------- animation ---------------------------------------

  // $('.blue-box').animate({
  //     marginLeft: "+=200px",
  //     opacity: "0",
  //     width : "50px",
  //     height: "50px"
  // }, 2900, "linear")

  // $(".p").animate({
  //     fontSize: "30px",
  // }, 1000);

  // ---------------------------- delay -------------------------------------------

  // $(".blue-box").delay(2000).fadeTo(2500, 0.5).fadeOut(2000).fadeIn(1000)

/// ---------------------------- call back ----------------------------------------
  // $(".red-box").fadeTo(2000, 0.5, function(){
  //     $(".green-box").fadeOut(2000, function() {
  //       $(".blue-box").fadeOut(1000)
  //     })
  // })

  // $(".lightbox").delay(2000).fadeIn(2000);


  // --------------------------- css bằng jquery ---------------------------------
  // $('.p').css("background-color", "rgb(180, 180, 30, 0.8)");
  // $('input[type=text]').css("background-color", "rgb(180, 180, 30, 0.8)");
  // $('input[type=submit]').css("background-color", "rgb(180, 180, 30, 0.8)");
  // $('li:last').css("background-color", "rgb(180, 180, 30, 0.8)");

  // lọc các phần tử có thứ tự chẵn
  // $('li:even').css("background-color", "rgb(180, 180, 30, 0.8)");

  // lọc các phần tử có thứ tự lẻ
  // $('li:odd').css("background-color", "rgb(180, 180, 30, 0.8)");

  // $('input:checkbox').css("background-color", "rgb(180, 180, 30, 0.8)");
  // $('input:radio').css("background-color", "rgb(180, 180, 30, 0.8)");
  // $('input:selected').css("background-color", "rgb(180, 180, 30, 0.8)");

  // ------------------ các phương thức truyền tải trong jquery ---------------------
//   // tìm và vàng các thẻ li
//   $('#list').find("li").css("background-color", "rgb(180, 180, 30, 0.8)");

//   //  vàng các thẻ con li
//   $('#list').children("li").css("background-color", "rgb(180, 180, 30, 0.8)");

//   // vàng hết
//   $('#list').parent("div").css("background-color", "rgb(180, 180, 30, 0.8)");
//   // hoặc 
//   $('#list').parent("div").css("background-color", "rgb(180, 180, 30, 0.8)");

// // họn tất cả các phần tử là anh chị em của phần tử được chọn.
//   // Cụ thể trong trường hợp này, nó sẽ chọn tất 
//   //cả các phần tử cùng cấp với phần tử có id là "list" (tức là các phần tử có cùng phần tử cha).
//   $('#list').siblings("").css("background-color", "rgb(180, 180, 30, 0.8)");

// // phần tử kế tiếp của list sẽ màu vàng
//    $('#list').next("").css("background-color", "rgb(180, 180, 30, 0.8)");

  // phần tử trước của list sẽ màu vàng
   // $('#list').prev("").css("background-color", "rgb(180, 180, 30, 0.8)");

  // ------------------------ các phương thức lọc trong jquery ------------------------------------
//   $('li').filter(":odd").css("background-color", "rgb(180, 180, 30, 0.8)");

//   $('li').filter(function(index) {
//     return index %2 == 0
//   }).css("background-color", "rgb(180, 180, 30, 0.8)");

//   $('li').first().css("background-color", "rgb(180, 180, 30, 0.8)");
//   $('li').last().css("background-color", "rgb(180, 180, 30, 0.8)");

//   // 1 hàm tìm lọc là eq sau đó truyền vị trí muốn lấy
//   $('li').eq(2).css("background-color", "rgb(180, 180, 30, 0.8)");
//   $('li').eq(-2).css("background-color", "rgb(180, 180, 30, 0.8)");

// // màu tất cả trừ phần tử đầu tiên
//   $('li').not(':first').css("background-color", "rgb(180, 180, 30, 0.8)");

  // ------------------------------ Thêm các phần tử mới vào DOM ---------------------------------
//   // sẽ thêm phần tử <li> mới vào đầu phần tử <ul> đầu tiên được tìm thấy bên trong một phần tử <ul> khác.
//   $("<li>Hello Phạm An Đẹp trai fullstack Developer</li>").prependTo('ul ul:first');

// //sẽ thêm phần tử <li> mới vào cuối phần tử <ul> đầu tiên được tìm thấy bên trong một phần tử <ul> khác.
//   $("<li>Hello Phạm An Đẹp trai fullstack Developer</li>").appendTo('ul ul:first');

//   // chèn 1 box đỏ ở phía sau
//   $('.red-box').after('<div class="red-box" style="background-color: red;">Hello An</div>');

//   $('.red-box').before('<div class="red-box" style="background-color: purple;">Hello An</div>');

//   $('.green-box').after($('.red-box'));

  // --------------------------------- Thây thế 1 số thẻ element và nội dung -----------------------
  // $('li').replaceWith('<p>Hello Phạm Ngọc Bảo An</p>');

  // $('li').replaceWith(function(){
  //   return "<p>Đại ca Cam Thành</p>";
  // })

  // var holyset = $('p:first');
  // $('li').replaceWith(holyset);

  // $('.red-box, .green-box').replaceWith('<div class="blue-box">Họa sĩ người áo</div>')

  // $('<div class="blue-box">Họa sĩ người áo</div>').replaceAll($('.red-box, .green-box'));

  // ------------------------- loại bỏ các thẻ element và nội dung của thẻ đó --------------------------

  // $("li").remove();

  // $("form").children().not("input:text, textarea, button").remove()

  // detach là hàm dùng để loại bỏ các phần tử được chọn ra khỏi DOM
  // đoạn code này miêu tả sự khác biệt giữa detach và remove

  // Dòng này sử dụng phương thức remove() để xóa tất cả các phần tử <li> khỏi DOM.
  // var removeListItem = $("li").remove();

  // Dòng này sử dụng phương thức detach() để gỡ bỏ tất cả các phần tử <li> khỏi DOM 
  // nhưng vẫn giữ lại các sự kiện và dữ liệu đã gắn kết.
  // var detachListItem = $('li').detach();
  // $("#content").append(detachListItem)

  // $(".red-box, .blue-box, .green-box").empty();


  // -------------------------------------- attr, val, prop -----------------------------------------------

  // var specialLink = $("#special-link");
  // // alert(specialLink.attr('href'))
  // // alert(specialLink.attr('title'))

  // specialLink.attr('href', 'https://baoanstore.xyz/')

  // var checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked"))
  // console.log(checkbox.attr("checked"))

  // var inputValue = $('input:text');

  // console.log(inputValue.val())

  // var inputValueRange = $('input[type=range]');

  // console.log(inputValueRange.val())


// ---------------------------- Thây đổi thuộc tính css cho các phần tử --------------------------
  // var redBox = $(".red-box");

  // redBox.css('background-color', "#AA7700");
  // $('p').css('font-size', '20px');
  // // console.log(redBox.css("width"));
  // // console.log(redBox.width());

  // var properti = $('p').css(['font-size', 'color', 'line-height']);

  // console.log(properti)
  // console.log(properti['font-size']);

  // // redBox.css('user-select', 'none');

  // redBox.css('user-select', function(){
  //   return "none";
  // });

  // ---------------------------- slide show -------------------------------------------
  var imageGallery = $('.gallery').find('img').first();

  var images = [
    'image/image-1.jpg',
    'image/image-2.jpg',
    'image/image-3.jpg',
  ];

  var i = 0;

  setInterval(function(){
      i = (i + 1) % images.length;
      imageGallery.fadeOut(function(){
          $(this).fadeIn()
          $(this).attr('src', images[i]);
      })
  }, 2000)

  // --------------------------- Thêm hoặc xóa các lớp css -------------------------------
  $("a").addClass("fancy-link");
  $("p:first").addClass("lange emphasize");

  $('li li').addClass(function(index) {
      $(this).addClass("item-" + index);
  })

  $('div').addClass(function(index, curentClass){
      if(curentClass === 'baby-shark')
      {
        return 'red-box'
      }
  });

  $('.red-box').removeClass('red-box').addClass('blue-box');
});
