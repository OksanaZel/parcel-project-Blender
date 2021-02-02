$(document).ready(function(){
        
          $(window).scroll(function(){
              if ($(this).scrollTop() > 100) {
                  $('.scroll__up').fadeIn();
              } else {
                  $('.scroll__up').fadeOut();
              }
              });
                
              $('.scroll__up').click(function(){
              $("html, body").animate({ scrollTop: 0 }, 600);
              return false;
          });
        
      });