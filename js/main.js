  $(document).ready(function(){
    $('.slider').slick({
	  autoplay: true,
	  autoplaySpeed: 6000,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
    pauseOnFocus: true,
    pauseOnHover: false
    });
  });

  $(document).ready(function(){
    $('.comand_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      speed: 2000,
      arrows: false,
      dots: true,
      pauseOnFocus: true,
      pauseOnHover: false
      });
  });