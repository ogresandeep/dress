$(document).ready(function(){
    $('#toggle').click(function(){
        $('.menu-area').stop().slideToggle(300);
    });

    $('.menu-item-has-children').children('a').after("<i class='fa fa-angle-down drop'></i>")

    $('.drop').click(function(){
        $(this).siblings('.sub-menu').stop().slideToggle();
    })


    /*form*/
    $('.label-anime').focus(function(){
	    var txt = $(this);
        $(this).siblings('label').addClass('up');
    });
      
    $('.label-anime').blur(function(){
        var txt = $(this);
        $(this).siblings('label').removeClass('up');
        if (txt.val() != null && txt.val() != '') {
            $(this).siblings('label').addClass('up');
        } 
    });


    /*date picker*/
    $( "#date1" ).datepicker();

    //$( "#date2" ).datepicker();

    /*image magnifir*/
    $('.related-product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
      });


        if (window.matchMedia("(max-width: 400px)").matches) {
            
           
            
            $('.product-large-view-area .tab-content').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                asNavFor: '.product-tubmb-area ul',
                arrows:false
            });
            
            $('.product-tubmb-area ul').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                asNavFor: '.product-large-view-area .tab-content',
                focusOnSelect: true
                
            });

        }

});