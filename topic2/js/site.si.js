$(function() {
  $('dl.sub-nav > dd, .nav-tabs > li').click(function(){
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
  });
  if ( $('body').attr('data-css') == 'foundation') {
    $(document).foundation();
  }
  if ( $('body').attr('data-css') == 'bootstrap') {
    $('.carousel').carousel();
  }
});

