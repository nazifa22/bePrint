$(document).ready(function(){
    // $('div.container-fluid').removeClass('container-fluid').addClass('container');
    // $('body').css({'background-color': '#000'});
    // $('.wrapper-background').hide();

    $('.main-div').hide();
    
    $('.icon').css({'left': '0'});
    
    $('.icon').click(function(){
        // $(this).toggle();
        $('.main-div').slideDown(1000);
        // $(this).css({'left': '308px', 'transition': 'all 0.3s linear'});
        $(this).slideUp(1000);
    });

    $('#cancel').click(function(){
        $('.main-div').slideUp(1000);
        $('.icon').slideDown(1000);
        // $('.icon').css({'left': '0', 'transition': 'all 0.3s linear'});
    });
});