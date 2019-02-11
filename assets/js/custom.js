$(document).ready(function(){
    $('.main-div').hide();
    
    $('.icon').css({'left': '0'});
    
    $('.icon').click(function(){
        $('.main-div').slideDown(1000);
        $(this).slideUp(1000);
    });

    $('#cancel').click(function(){
        $('.main-div').slideUp(1000);
        $('.icon').slideDown(1000);
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
            // console.log(currnetColor);
            $('.clr').css('color', currnetColor);
            $('.bgColor').css('background-color', currnetColor);
            $('.main-div').slideUp(1000);
            $('.icon').slideDown(1000);
        }
    });

    $('#boxed-button').click(function(){
        $('div.container-fluid').removeClass('container-fluid').addClass('container');
        
        $('body').addClass('bodyColor').removeClass('bodyBG');

        $('#works > .overlay').hide();

        $('#works .bg').removeClass('bg').addClass('boxed-bg');

        $('#works').find('.title').css({
            'color': '#fff'
        });

        $('#works').find('p').css({
            'color': '#fff'
        });

        $('#about').find('.title').css({
            'color': '#fff'
        });

        $('#about').find('.sub-title').css({
            'color': '#fff'
        });

        $('#about').find('p').css({
            'color': '#fff'
        });

        $('#about .about-bg').removeClass('about-bg').addClass('boxed-bg');

        $('#contact > .bgColor').removeClass('bgColor').addClass('boxed-bg');

        $('#contact  a').css({
            'color': '#fff'
        });

        $('#contact  p').css({
            'color': '#fff'
        });

        $('.main-div').slideUp(1000);
        
        $('.icon').slideDown(1000);
    });

    $('#wide-button').click(function(){
        $('div.container').removeClass('container').addClass('container-fluid');
        $('.main-div').slideUp(1000);
        $('.icon').slideDown(1000);

        $('#works .boxed-bg').removeClass('boxed-bg').addClass('bg');

        $('#about .boxed-bg').removeClass('boxed-bg').addClass('about-bg');

        $('#works').find('.title').css({
            'color': '#000'
        });

        $('#works').find('.sub-title').css({
            'color': '#000'
        });

        $('#about').find('.title').css({
            'color': '#fff'
        });

        $('#about').find('.sub-title').css({
            'color': '#fff'
        });

        $('#about').find('p').css({
            'color': '#fff'
        });

        $('#works').find('p').css({
            'color': '#000'
        });

        $('#contact > .boxed-bg').removeClass('boxed-bg').addClass('bgColor');

        $('#contact a').css({
            'color': '#000'
        });

        $('#contact p').css({
            'color': '#000'
        });

        $('#works > .overlay').show();
        $('#about > .overlay').show();
    });

    $('#bg-button').click(function(){
        $('div.container-fluid').removeClass('container-fluid').addClass('container');
        $('body').addClass('bodyBG').removeClass('bodyColor');
        $('.main-div').slideUp(1000);
        $('.icon').slideDown(1000);

        $('#works > .overlay').hide();

        $('#about  .about-bg').removeClass('about-bg').addClass('boxed-bg');

        $('#about > .overlay').hide();

        $('#works .bg').removeClass('bg');

        $('#works').find('.title').css({
            'color': '#fff'
        });

        $('#works').find('.sub-title').css({
            'color': '#fff'
        });

        $('#works').find('p').css({
            'color': '#fff'
        });

        $('#contact > .bgColor').removeClass('bgColor').addClass('boxed-bg');

        $('#contact  a').css({
            'color': '#fff'
        });
    });
    
});