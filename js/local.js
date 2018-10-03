$(document).ready(function(){
    $('#toggle').click(function(){
        $('.menu-area').stop().slideToggle(300);
    });

    $('.menu-item-has-children').children('a').after("<i class='fa fa-angle-down drop'></i>")

    $('.drop').click(function(){
        $(this).siblings('.sub-menu').stop().slideToggle();
    })
});