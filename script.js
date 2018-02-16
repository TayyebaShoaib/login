$("document").ready(function () {
  $('.register').hide();
  $('.registerButton').click(function () {
    $('form.register').toggle();
    $('form.login').hide();
  });
  $('.loginButton').click(function () {
    $('.register').hide();
    $('.login').toggle();
  });
});
// $('.register')
