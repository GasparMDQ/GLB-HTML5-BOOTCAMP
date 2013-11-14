$(function() {
  $('dl.sub-nav > dd').click(function(){
    $(this).parent().children().removeClass('active');
    $(this).addClass('active');
  });
  if ( $('body').attr('data-css') == 'foundation') {
    $(document).foundation();
  }
});

