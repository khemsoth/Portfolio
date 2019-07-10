$('nav').find('a').click(function(event) {
  event.preventDefault();
  var sec=$(this).attr('href');
  $('html').animate({
    scrollTop:$(sec).offset().top
  });
});


//  Opening apps in new window
$('#Ntl-Park-App').on('click', function() {
  window.open('https://khemsoth.github.io/NationalParkApp/');
});

$('#Crystal-Collector').on('click', function() {
  window.open('https://khemsoth.github.io/Crystal-Collector/');
});

$('#GoT').on('click', function() {
  window.open('https://gotswag.herokuapp.com/');
});