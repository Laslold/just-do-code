$(document).ready(function () { 
  $('.slider').slick({
    arrows: true,
    adaptiveHight: false,
    slidesToShow:3,
    slidesToScroll: 1,
    spped: 1000,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus:true, 
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode: true,

      responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3
          }
      
        },{
        breakpoint: 479.98,
       settings: {
        slidesToShow: 3
      }}
  ]
  });
});