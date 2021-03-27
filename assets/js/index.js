$('nav').find('a').click(function(event) {
  event.preventDefault();
  var sec=$(this).attr('href');
  $('html').animate({
    scrollTop:$(sec).offset().top
  });
});


//  Opening apps in new window
$('#to-do-list').on('click', function() {
  window.open('https://jot-a-note.netlify.app/');
});

$('#to-do-list-btn').on('click', function() {
  window.open('https://jot-a-note.netlify.app/');
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

$('#Fuel-Calc').on('click', function() {
  window.open('https://flag-to-flag-fuel.netlify.app');
});

$('#Fuel-Calc-btn').on('click', function() {
  window.open('https://flag-to-flag-fuel.netlify.app');
});