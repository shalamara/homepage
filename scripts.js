$(document).ready(function(){

  $("#gallery").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      responsive: true

  });
  $("#mobile-gallery").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    responsive: true

  });


  $(".button").click(function(){
//when menu is clicked, apply "headerscrolled" until an option is selected or anything is scrolled. maybe the link action could be "scroll to"
    $("header").removeAttr('id', 'headerscrolled');

  });



$('.send').click(function(){
  $('.sent').toggle();
});


});

$(window).scroll(function(){
    var fromTopPx = 10; // distance to trigger
    var scrolledFromtop = $(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
      $("header").attr('id', 'headerscrolled');
    } else {
      $("header").removeAttr('id');

    }
    console.log(scrolledFromtop)

});
