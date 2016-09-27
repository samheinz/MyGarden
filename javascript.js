$(document).ready(function(){
  console.log("hey");
  $(".background.clearing").on("mouseenter", ".left.box", function(){
    $(this).css({"height": "300px", "width": "300px", "opacity":"1"});
    console.log("yo")
    $(this).siblings().css({"height": "180px", "width": "180px", "opacity":".1"});
  });
  $(".background.clearing").on("mouseleave", ".left.box", function(){
    $(this).css({"height": "200px", "width": "200px", "opacity":".4"});
    console.log("yo")
    $(this).siblings().css({"height": "200px", "width": "200px", "opacity":".4"});
  });
})
