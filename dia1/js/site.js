$(function() {
  $('.js-helloWorld[hidden]').fadeIn(1000, function(){
    $(this).removeAttr('hidden');
    $('.alias').focus();
  });
  $('button').click(function(){
    var name = $('.alias').val();
    $.post('http://bootcamp.aws.af.cm/welcome/'+name)
    .done(function(data){
      $('.js-helloWorld').removeClass('error');
      $('.js-helloWorld').html(data.response);
      highlightName($('.js-helloWorld'),$('.alias').val());
    })
    .fail(function(){
      $('.js-helloWorld').addClass('error');
    });
  });
  loadTweets();
});

function highlightName($element, name) {
  $element.html($element.html().replace(name,'<span class="highlight">'+name+'</span>'));
}

function loadTweets() {
  var ajxObj = $.ajax({
    url: "helper/proxy.php",
    data: {url: "http://tweetproxy.ap01.aws.af.cm/search?" + $.param({q:'html5'}) },
    dataType: 'json'
  })
  .done(function(data){
    for (var k in data.statuses) {
      var $article = newArticle(data.statuses[k].text, data.statuses[k].user.profile_image_url,
        data.statuses[k].user.screen_name, data.statuses[k].created_at);
      $('.js-tweets').append($article);
    }
  })
}

function newArticle(text, image, screen_name, date) {
  var $text = $('<p></p>').html(text);
  var $image = $('<img>').attr('src', image);
  var $screen_name = $('<span></span>').html('@'+screen_name).addClass('small');
  var $date = $('<span></span>').html(date).addClass('date');
  var $footer = $('<footer></footer>').append($date, $screen_name, $image);

  var $article = $('<article></article>');
  $article.append($text);
  $article.append($footer);

  return $article;
}