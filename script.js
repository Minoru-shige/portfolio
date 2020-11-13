$(function(){
  $('.signupbtn').click(function(){
    $('#show-modal').fadeIn();
  });
  $('.close-modal').click(function(){
    $('#show-modal,#show-login-modal').fadeOut();
  });
  $('.login').click(function(){
    $('#show-login-modal').fadeIn();
  });
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });
});