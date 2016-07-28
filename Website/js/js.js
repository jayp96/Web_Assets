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