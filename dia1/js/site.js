$(function() {
  $('section[hidden=true]').fadeIn(1000, function(){
    $(this).removeAttr('hidden');
    $('.alias').focus();
  });
  $('button').click(function(){
    $.post('http://bootcamp.aws.af.cm/welcome/tunombre')
    .done(function(data){
      $('section').html(data.response);
    })
    .fail(function(){
      $('section').addClass('error');
    });
    
  });
});