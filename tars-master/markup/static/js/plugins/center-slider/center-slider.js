 $(document).ready(function() {
     
 
     
$('.center').slick({
  centerMode: true,
  centerPadding: '600px',
  slidesToShow: 1,
  responsive: [
      
      
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '340px',
        slidesToShow: 1
      }
    }, 
      
      
      
      
    {
      breakpoint: 1800,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '450px',
        slidesToShow: 1
      }
    },
            
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
      
      
      
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});    
  

});