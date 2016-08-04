$(document).ready(function(){

 $(".vatab2").hide();
});

$(function () {
    var body = $('header');
    var backgrounds = [
       
      'url(img/main3.jpg)',
      'url(img/main4.jpg)',
      'url(img/main2.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background-image',
        backgrounds[current = ++current % backgrounds.length]);
        
        setTimeout(nextBackground, 2000);
    }
    setTimeout(nextBackground, 2000);
    body.css('background-image', backgrounds[0]);
});





$(".vb2").click(function(){
    $(".vatab1").hide();
    $(".vatab2").show();
    $(".vb1").removeClass('active');
    $(".vb2").addClass('active');

});

$(".vb1").click(function(){
    $(".vatab2").hide();
    $(".vatab1").show();
    $(".vb2").removeClass('active');
    $(".vb1").addClass('active');

});


$(".fic").click(function()
      {
    $('html, body').animate({
        scrollTop: $("#valuation").offset().top
    }, 2000);
    
});

$(".sic").click(function()
      {
    $('html, body').animate({
        scrollTop: $("#advertise").offset().top
    }, 2000);
    
});
$(".tic").click(function()
      {
    $('html, body').animate({
        scrollTop: $("#sellbuy").offset().top
    }, 2000);
    
});



$('.gototop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });