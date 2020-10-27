// inizio esercizio slid img

$(document).ready( function() {

   $(".prev").click( function() {
      direct("prev");
   });

   $(".next").click( function() {
      direct("next");
   });

});

// direzione click
function direct(direction) {
   var img = $(".images .active");
   var ico = $(".nav .active");

   img.removeClass("active");
   ico.removeClass("active");

    if (direction === "next") {

      if (img.hasClass("last") ) {
        $(".images .first").addClass("active");
        $(".nav .first").addClass("active");
      }
      else {
       img.next("img").addClass("active");
       ico.next("i").addClass("active");
      }

    }
    else if (direction === "prev") {
      if (img.hasClass("first") ) {
        $(".images .last").addClass("active");
        $(".nav .last").addClass("active");
      }
      else {
       img.prev("img").addClass("active");
       ico.prev("i").addClass("active");
      }
    }
};
