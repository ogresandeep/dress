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
    

});