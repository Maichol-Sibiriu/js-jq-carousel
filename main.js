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
      img.next("img").addClass("active");
      ico.next("i").addClass("active");
   }
};
