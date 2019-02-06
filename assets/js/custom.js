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

    $('#color-picker').on('input', function(event) {

        var currnetColor = event.target.value;
        console.log(currnetColor);

        if(currnetColor == '#000000')
        {
            currnetColor = '';
        }
        else if(currnetColor == '#ffffff')
        {
            currnetColor = '';
        }
        else {
            $('.clr').css('color', currnetColor);
            $('.bgColor').css('background-color', currnetColor);
        }
    });

    $('#boxed-button').click(function(){
        $('div.container-fluid').removeClass('container-fluid').addClass('container');
        $('body').addClass('bodyColor');
    });

    $('#wide-button').click(function(){
        $('div.container-fluid').removeClass('container').addClass('container-fluid');
    });

    $('#bg-button').click(function(){
        $('div.container-fluid').removeClass('container-fluid').addClass('container');
        $('body').addClass('bodyBG');
    });
    
});