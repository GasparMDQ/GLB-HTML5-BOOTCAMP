$(function() {
  $('section[hidden=true]').fadeIn(1000, function(){
    $(this).removeAttr('hidden');
    $('.alias').focus();
  });
  $('button').click(function(){
    var name = $('.alias').val();
    $.post('http://bootcamp.aws.af.cm/welcome/'+name)
    .done(function(data){
      $('section').removeClass('error');
      $('section').html(data.response);
      highlightName($('section'),$('.alias').val());
    })
    .fail(function(){
      $('section').addClass('error');
    });
    
  });
});

function highlightName($element, name) {
  $element.html($element.html().replace(name,'<span class="highlight">'+name+'</span>'));
}