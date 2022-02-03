$('.accordion').click(function(e) {
    e.preventDefault();
    var currentIsActive = $(this).hasClass('active');
    console.log(currentIsActive,'dvgc')
    $(this).parent('.accordion-wrap').find('div').removeClass('active');
    $(this).parent('.accordion-wrap').find('div').removeClass('activeP');
    if(currentIsActive != true) {
        $('.accordion').removeClass('active');
        $('.accordion').next('.panel').removeClass('activeP');
        $(this).addClass('active');
        $(this).next('.panel').addClass('activeP');
    }else{
        $(this).removeClass('active');
        $(this).next('.panel').removeClass('activeP');
    }

});


