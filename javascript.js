$(document).ready(function(){
  console.log("hey");
    $(".background.clearing").on("mouseenter", ".left.box", function(){
      $(this).css({"height": "380px", "width": "380px", "opacity":"1"});
      // console.log("yo");
      $(this).siblings().css({"height": "180px", "width": "180px", "opacity":".1"});
    });
    $(".background.clearing").on("mouseleave", ".left.box", function(){
      $(this).css({"height": "200px", "width": "200px", "opacity":".4"});
      // console.log("yo")
      $(this).siblings().css({"height": "200px", "width": "200px", "opacity":".4"});
    });

// jquery responding to smaller screen sizes

  $(window).on("resize", function(){
    console.log("HEY YA")
    if($(this).width() < 739){
      console.log("YUUUSSSSS")
      $(".left.box").css({"height":"250", "width":"250", "opacity":".4"});

      $(".background.clearing").on("mouseenter", ".left.box", function(){
        $(this).css({"height":"300", "width":"300", "opacity":"1"});
      })
      $(".background.clearing").on("mouseleave", ".left.box", function(){
        $(this).css({"height":"250", "width":"250", "opacity":".4"})
      })
    }
    else{
      console.log("YIIIIISSSSS")
      $(".left.box").css({"height":"200", "width":"200", "opacity":".4"});

      $(".background.clearing").on("mouseenter", ".left.box", function(){
        $(this).css({"height":"380", "width":"380", "opacity":"1"});
        $(this).siblings().css({"height": "180px", "width": "180px", "opacity":".1"});
      })
      $(".background.clearing").on("mouseleave", ".left.box", function(){
        $(this).css({"height":"200", "width":"200", "opacity":".4"});
        $(this).siblings().css({"height": "200px", "width": "200px", "opacity":".4"});
      })
    }
  })

  $(".title").animate({
  height: 200,
  width: 400,
  opacity: 1
}, 1500, "linear");
})

// if ( $(window).width() > 739) {
//   //Add your javascript for large screens here
// }
// else {
//   //Add your javascript for small screens here
// }
