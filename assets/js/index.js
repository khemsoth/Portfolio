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

$('#morning-coffee-marketing').on('click', function() {
  window.open('https://morningcoffeemarketing.herokuapp.com/');
});

$('#GoT').on('click', function() {
  window.open('https://gotswag.herokuapp.com/');
});