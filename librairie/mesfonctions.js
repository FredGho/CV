$(document).ready(function() {
  console.log("ok");
  var scrollFunction = function(id){
    $(id).on("click",function(){
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top }, 700 );
    });
  };

scrollFunction(".boutons");
});