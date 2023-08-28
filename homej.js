$('.cart-totals p:nth-child(2),.cart-totals p:nth-child(3)').css('color', 'orange');

$('#user').click(function(e){
    e.preventDefault();
    $('.account').toggle();
    $('.cart-card .container').hide();
});

$('.nav-bar ul #prod001').click(function(){
    $('.products-dropdown').toggle();
    $('.collections-dropdown').hide();
});

$('.nav-bar ul #col001').click(function(){
    $('.collections-dropdown').toggle();
    $('.products-dropdown').hide();
});

$('.second-ad').hide();

$('.icon-left #icon-angleL').click(function(){
    $('.first-ad').fadeIn(3000);
    $('.second-ad').hide();
});

$('.icon-right #icon-angleR').click(function(){
    $('.second-ad').fadeIn(3000);
    $('.first-ad').hide();
});

$('.page-links ul #prod001').click(function(){
    $('.products-dropdown-mobile').toggle();
    $('.collections-dropdown-mobile').hide();
});

$('.page-links ul #col001').click(function(){
    $('.collections-dropdown-mobile').toggle();
    $('.products-dropdown-mobile').hide();
});

$('.hamburger-menu #hammenu').click(function(){
    $('.page-links').toggle();
});



