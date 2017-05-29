(function ($, Drupal, window, document, undefined) {

$(document).ready(function(){

// To make slideshow responsive,
    $(window).resize(function(){
      $('.views_slideshow_cycle_main').each(function(){
        var cycleMain = $(this);
        var img_width = 0,
            img_height = 0;
        var clearCSS = {width: "auto", height: "auto"};
        var cycle = cycleMain.children('.views-slideshow-cycle-main-frame');
        cycleElements = cycle.data("cycle.opts");
        cycle.css(clearCSS);
        cycleMain.find('.views-slideshow-cycle-main-frame-row').each(function(i){
          $(this).css(clearCSS);
          var tmp_img_width = $(this).width();
          var tmp_img_height = $(this).height();
          if(tmp_img_width > img_width)
            img_width = tmp_img_width;
          if(tmp_img_height > img_height)
            img_height = tmp_img_height;
          cycleElements.elements[i].cycleW = tmp_img_width;
          cycleElements.elements[i].cycleH = tmp_img_height;
          $(this).css({width: tmp_img_width, height: tmp_img_height});
        });
        cycleMain.height(img_height);
        cycle.css({width: img_width, height: img_height});
        cycle.data("cycle.opts.elements", cycleElements);
      });
    });
});

  

})(jQuery, Drupal, this, this.document);



  /*++++++++++++++++++++++++++++


sessionStorage.setItem("position", "#block-menu-block-1 li.active");
        var position = sessionStorage.getItem("position");

/**************************************************/
/*
if (window.matchMedia("(max-width: 990px)").matches) {  
     $('#block-menu-block-1 li.active').insertAfter('#block-menu-block-1 li.last');
  }
    
    $(window).resize(function() {
    if (window.matchMedia("(max-width: 990px)").matches) {  
       $('#block-menu-block-1 li.active').insertAfter('#block-menu-block-1 li.last');
      }
      
   });

      
   };

else{
        sessionStorage.setItem("position", $("#block-menu-block-1 li.active").index(this);
        var position = sessionStorage.getItem("position");
        

      }
*/
/*+++++++++++++++++++
    $(document).ready(function(){
  $('#block-views-videotheque-block .item-list ul').slick({
    slidesToShow: 2,
  //slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  rows:2,
  });
});

*-------------------------------------


$(document).ready(function() {
  $("#ingredients").on("click", function( e ) {

    e.preventDefault();

    $(".views-field-body").animate({ 
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
  });
});