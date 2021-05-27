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
      arrows: true,
      dots: false,
      pauseOnFocus: true,
      pauseOnHover: false
      });
  });


  function changeItem_1() {
    document.getElementById('img_1').style.display = 'flex';
    document.getElementById('img_2').style.display = 'none';
    document.getElementById('img_3').style.display = 'none';
    document.getElementById('img_4').style.display = 'none';
    document.getElementById('t_1').style.display = 'inline-block';
    document.getElementById('t_2').style.display = 'none';
    document.getElementById('t_3').style.display = 'none';
    document.getElementById('t_4').style.display = 'none';
    document.getElementById('but_1').style.backgroundColor = '#D1FFFE';
    document.getElementById('but_2').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_3').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_4').style.backgroundColor = '#FFFFFF';
  }

  function changeItem_2() {
    document.getElementById('img_1').style.display = 'none';
    document.getElementById('img_2').style.display = 'flex';
    document.getElementById('img_3').style.display = 'none';
    document.getElementById('img_4').style.display = 'none';
    document.getElementById('t_1').style.display = 'none';
    document.getElementById('t_2').style.display = 'inline-block';
    document.getElementById('t_3').style.display = 'none';
    document.getElementById('t_4').style.display = 'none';
    document.getElementById('but_1').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_2').style.backgroundColor = '#D1FFFE';
    document.getElementById('but_3').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_4').style.backgroundColor = '#FFFFFF';
   
  }
  

  function changeItem_3() {
    document.getElementById('img_1').style.display = 'none';
    document.getElementById('img_2').style.display = 'none';
    document.getElementById('img_3').style.display = 'flex';
    document.getElementById('img_4').style.display = 'none';
    document.getElementById('t_1').style.display = 'none';
    document.getElementById('t_2').style.display = 'none';
    document.getElementById('t_3').style.display = 'inline-block';
    document.getElementById('t_4').style.display = 'none';
    document.getElementById('but_1').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_2').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_3').style.backgroundColor = '#D1FFFE';
    document.getElementById('but_4').style.backgroundColor = '#FFFFFF';
  }


  function changeItem_4() {
    document.getElementById('img_1').style.display = 'none';
    document.getElementById('img_2').style.display = 'none';
    document.getElementById('img_3').style.display = 'none';
    document.getElementById('img_4').style.display = 'flex';
    document.getElementById('t_1').style.display = 'none';
    document.getElementById('t_2').style.display = 'none';
    document.getElementById('t_3').style.display = 'none';
    document.getElementById('t_4').style.display = 'inline-block';
    document.getElementById('but_1').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_2').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_3').style.backgroundColor = '#FFFFFF';
    document.getElementById('but_4').style.backgroundColor = '#D1FFFE';
  }

  function changeItem_1_1() {
      document.getElementById('sort_text_1_1').style.display = 'flex';
      document.getElementById('sort_text_1_2').style.display = 'none';
      document.getElementById('sort_text_1_3').style.display = 'none';
      document.getElementById('sort_text_1_4').style.display = 'none';
      document.getElementById('sort_text_1_5').style.display = 'none';
      document.getElementById('sort_text_1_6').style.display = 'none';
      document.getElementById('but_1_1').style.color = '#02BBB6';
      document.getElementById('but_1_2').style.color = '#4C4B4B';
      document.getElementById('but_1_3').style.color = '#4C4B4B';
      document.getElementById('but_1_4').style.color = '#4C4B4B';
      document.getElementById('but_1_5').style.color = '#4C4B4B';
      document.getElementById('but_1_6').style.color = '#4C4B4B';
  }
  function changeItem_1_2() {
      document.getElementById('sort_text_1_1').style.display = 'none';
      document.getElementById('sort_text_1_2').style.display = 'flex';
      document.getElementById('sort_text_1_3').style.display = 'none';
      document.getElementById('sort_text_1_4').style.display = 'none';
      document.getElementById('sort_text_1_5').style.display = 'none';
      document.getElementById('sort_text_1_6').style.display = 'none';
      document.getElementById('but_1_1').style.color = '#4C4B4B';
      document.getElementById('but_1_2').style.color = '#02BBB6';
      document.getElementById('but_1_3').style.color = '#4C4B4B';
      document.getElementById('but_1_4').style.color = '#4C4B4B';
      document.getElementById('but_1_5').style.color = '#4C4B4B';
      document.getElementById('but_1_6').style.color = '#4C4B4B';
  }
  function changeItem_1_3() {
      document.getElementById('sort_text_1_1').style.display = 'none';
      document.getElementById('sort_text_1_2').style.display = 'none';
      document.getElementById('sort_text_1_3').style.display = 'flex';
      document.getElementById('sort_text_1_4').style.display = 'none';
      document.getElementById('sort_text_1_5').style.display = 'none';
      document.getElementById('sort_text_1_6').style.display = 'none';
      document.getElementById('but_1_1').style.color = '#4C4B4B';
      document.getElementById('but_1_2').style.color = '#4C4B4B';
      document.getElementById('but_1_3').style.color = '#02BBB6';
      document.getElementById('but_1_4').style.color = '#4C4B4B';
      document.getElementById('but_1_5').style.color = '#4C4B4B';
      document.getElementById('but_1_6').style.color = '#4C4B4B';
  }
  function changeItem_1_4() {
      document.getElementById('sort_text_1_1').style.display = 'none';
      document.getElementById('sort_text_1_2').style.display = 'none';
      document.getElementById('sort_text_1_3').style.display = 'none';
      document.getElementById('sort_text_1_4').style.display = 'flex';
      document.getElementById('sort_text_1_5').style.display = 'none';
      document.getElementById('sort_text_1_6').style.display = 'none';
      document.getElementById('but_1_1').style.color = '#4C4B4B';
      document.getElementById('but_1_2').style.color = '#4C4B4B';
      document.getElementById('but_1_3').style.color = '#4C4B4B';
      document.getElementById('but_1_4').style.color = '#02BBB6';
      document.getElementById('but_1_5').style.color = '#4C4B4B';
      document.getElementById('but_1_6').style.color = '#4C4B4B';
  }
  function changeItem_1_5() {
      document.getElementById('sort_text_1_1').style.display = 'none';
      document.getElementById('sort_text_1_2').style.display = 'none';
      document.getElementById('sort_text_1_3').style.display = 'none';
      document.getElementById('sort_text_1_4').style.display = 'none';
      document.getElementById('sort_text_1_5').style.display = 'flex';
      document.getElementById('sort_text_1_6').style.display = 'none';
      document.getElementById('but_1_1').style.color = '#4C4B4B';
      document.getElementById('but_1_2').style.color = '#4C4B4B';
      document.getElementById('but_1_3').style.color = '#4C4B4B';
      document.getElementById('but_1_4').style.color = '#4C4B4B';
      document.getElementById('but_1_5').style.color = '#02BBB6';
      document.getElementById('but_1_6').style.color = '#4C4B4B';
  }
  function changeItem_1_6() {
      document.getElementById('sort_text_1_1').style.display = 'none';
      document.getElementById('sort_text_1_2').style.display = 'none';
      document.getElementById('sort_text_1_3').style.display = 'none';
      document.getElementById('sort_text_1_4').style.display = 'none';
      document.getElementById('sort_text_1_5').style.display = 'none';
      document.getElementById('sort_text_1_6').style.display = 'flex';
      document.getElementById('but_1_1').style.color = '#4C4B4B';
      document.getElementById('but_1_2').style.color = '#4C4B4B';
      document.getElementById('but_1_3').style.color = '#4C4B4B';
      document.getElementById('but_1_4').style.color = '#4C4B4B';
      document.getElementById('but_1_5').style.color = '#4C4B4B';
      document.getElementById('but_1_6').style.color = '#02BBB6';
  }
  function changeItem_2_1() {
    document.getElementById('sort_text_2_1').style.display = 'flex';
    document.getElementById('sort_text_2_2').style.display = 'none';
    document.getElementById('sort_text_2_3').style.display = 'none';
    document.getElementById('but_2_1').style.color = '#02BBB6';
    document.getElementById('but_2_2').style.color = '#4C4B4B';
    document.getElementById('but_2_3').style.color = '#4C4B4B';
  }
  function changeItem_2_2() {
    document.getElementById('sort_text_2_1').style.display = 'none';
    document.getElementById('sort_text_2_2').style.display = 'flex';
    document.getElementById('sort_text_2_3').style.display = 'none';
    document.getElementById('but_2_1').style.color = '#4C4B4B';
    document.getElementById('but_2_2').style.color = '#02BBB6';
    document.getElementById('but_2_3').style.color = '#4C4B4B';
  }
  function changeItem_2_3() {
    document.getElementById('sort_text_2_1').style.display = 'none';
    document.getElementById('sort_text_2_2').style.display = 'none';
    document.getElementById('sort_text_2_3').style.display = 'flex';
    document.getElementById('but_2_1').style.color = '#4C4B4B';
    document.getElementById('but_2_2').style.color = '#4C4B4B';
    document.getElementById('but_2_3').style.color = '#02BBB6';
  }
  
  function changeItem_3_1() {
    document.getElementById('sort_text_3_1').style.display = 'flex';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#02BBB6';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
}
  function changeItem_3_2() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'flex';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#02BBB6';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_3() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'flex';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#02BBB6';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_4() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'flex';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#02BBB6';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_5() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'flex';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#02BBB6';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_6() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'flex';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#02BBB6';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_7() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'flex';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#02BBB6';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_8() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'flex';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#02BBB6';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_9() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'flex';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#02BBB6';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_10() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'flex';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#02BBB6';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_11() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'flex';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#02BBB6';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_12() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'flex';
    document.getElementById('sort_text_3_13').style.display = 'none';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#02BBB6';
    document.getElementById('but_3_13').style.color = '#4C4B4B';
  }
  function changeItem_3_13() {
    document.getElementById('sort_text_3_1').style.display = 'none';
    document.getElementById('sort_text_3_2').style.display = 'none';
    document.getElementById('sort_text_3_3').style.display = 'none';
    document.getElementById('sort_text_3_4').style.display = 'none';
    document.getElementById('sort_text_3_5').style.display = 'none';
    document.getElementById('sort_text_3_6').style.display = 'none';
    document.getElementById('sort_text_3_7').style.display = 'none';
    document.getElementById('sort_text_3_8').style.display = 'none';
    document.getElementById('sort_text_3_9').style.display = 'none';
    document.getElementById('sort_text_3_10').style.display = 'none';
    document.getElementById('sort_text_3_11').style.display = 'none';
    document.getElementById('sort_text_3_12').style.display = 'none';
    document.getElementById('sort_text_3_13').style.display = 'flex';
    document.getElementById('but_3_1').style.color = '#4C4B4B';
    document.getElementById('but_3_2').style.color = '#4C4B4B';
    document.getElementById('but_3_3').style.color = '#4C4B4B';
    document.getElementById('but_3_4').style.color = '#4C4B4B';
    document.getElementById('but_3_5').style.color = '#4C4B4B';
    document.getElementById('but_3_6').style.color = '#4C4B4B';
    document.getElementById('but_3_7').style.color = '#4C4B4B';
    document.getElementById('but_3_8').style.color = '#4C4B4B';
    document.getElementById('but_3_9').style.color = '#4C4B4B';
    document.getElementById('but_3_10').style.color = '#4C4B4B';
    document.getElementById('but_3_11').style.color = '#4C4B4B';
    document.getElementById('but_3_12').style.color = '#4C4B4B';
    document.getElementById('but_3_13').style.color = '#02BBB6';
  }
  
  function changeItem_4_1() {
    document.getElementById('sort_text_4_1').style.display = 'flex';
    document.getElementById('sort_text_4_2').style.display = 'none';
    document.getElementById('sort_text_4_3').style.display = 'none';
    document.getElementById('but_4_1').style.color = '#02BBB6';
    document.getElementById('but_4_2').style.color = '#4C4B4B';
    document.getElementById('but_4_3').style.color = '#4C4B4B';
  }
  function changeItem_4_2() {
    document.getElementById('sort_text_4_1').style.display = 'none';
    document.getElementById('sort_text_4_2').style.display = 'flex';
    document.getElementById('sort_text_4_3').style.display = 'none';
    document.getElementById('but_4_1').style.color = '#4C4B4B';
    document.getElementById('but_4_2').style.color = '#02BBB6';
    document.getElementById('but_4_3').style.color = '#4C4B4B';
  }
  function changeItem_4_3() {
    document.getElementById('sort_text_4_1').style.display = 'none';
    document.getElementById('sort_text_4_2').style.display = 'none';
    document.getElementById('sort_text_4_3').style.display = 'flex';
    document.getElementById('but_4_1').style.color = '#4C4B4B';
    document.getElementById('but_4_2').style.color = '#4C4B4B';
    document.getElementById('but_4_3').style.color = '#02BBB6';
  }
  function changeItem_1_1_1() {
    document.getElementById('shop_man').style.display = 'flex';
    document.getElementById('shop_women').style.display = 'none';
    document.getElementById('shop_man_btn').style.color = '#02BBB6';
    document.getElementById('shop_women_btn').style.color = '#4C4B4B';
  }
  function changeItem_1_1_2() {
    document.getElementById('shop_man').style.display = 'none';
    document.getElementById('shop_women').style.display = 'flex';
    document.getElementById('shop_man_btn').style.color = '#4C4B4B';
    document.getElementById('shop_women_btn').style.color = '#02BBB6';
  }

