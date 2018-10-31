$(document).ready(
    function() {
        $("#thisdiv").niceScroll({
        	cursorcolor:"#efa223",
        	cursorwidth: "8px",
        	cursorfixedheight: 70,
        	cursoropacitymin: 1,
        	cursorborderradius: "2px",
        	emulatetouch: true


    });
    }
);

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    adaptiveHeight: true
  });
});

$('.type-food__btn').click(function() {
    $(this).toggleClass('show-tooltip')
});