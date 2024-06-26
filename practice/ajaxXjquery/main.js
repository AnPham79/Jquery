$(function() {
  // $.get() ------- $.post() ------ $.ajax()  ----- $ .getJson() -----
  // $('#code').load("index.html", function(respon, status) {
  //   if(status == 'error') {
  //     alert('Không tìm thấy file yahubaba.php');
  //   }
  //   console.log(respon)
  // })

  var flickrAPIurl = 'https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg'

  $.getJSON(flickrAPIurl, {
    
  })
});
