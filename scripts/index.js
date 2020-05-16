
$(document).ready(function(){
    $('.slider_container').slick({
        arrows: false,
        dots: true, 
    });
    $('.slider_container_2').slick({
        infinite: true,
        dots: false, 
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
    
});
