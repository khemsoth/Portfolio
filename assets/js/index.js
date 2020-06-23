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

$('#Ntl-Park-App-btn').on('click', function() {
  window.open('https://khemsoth.github.io/NationalParkApp/');
});

$('#morning-coffee-marketing').on('click', function() {
  window.open('https://morningcoffeemarketing.herokuapp.com/');
});

$('#morning-coffee-marketing-btn').on('click', function() {
  window.open('https://morningcoffeemarketing.herokuapp.com/');
});

$('#fcs').on('click', function() {
  window.open('https://fantastic-concrete-solutions.herokuapp.com/');
});

$('#fcs-btn').on('click', function() {
  window.open('https://fantastic-concrete-solutions.herokuapp.com/');
});