$(document).ready(function(){
    // $('div.container-fluid').removeClass('container-fluid').addClass('container');
    // $('body').css({'background-color': '#000'});
    // $('.wrapper-background').hide();

    $('.main-div').hide();
    
    $('.icon').css({'left': '0'});
    
    $('.icon').click(function(){
        $('.main-div').slideToggle(500);
        $(this).css({'left': '395px', 'transition': 'all 0.3s linear'});
    });
});