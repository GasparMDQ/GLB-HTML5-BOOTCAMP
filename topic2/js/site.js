$(function() {
  $('.js-search-form button').click(function(){
    loadVideos();
  });
  showThumbnails();
});

function showThumbnails(){
  $("a.oembed").oembed(null, 
  {
    embedMethod: "append", 
    maxWidth: 250,
    afterEmbed: function(oembedData) { 
      afterEmbedStuff(); },

  });
}

function loadVideos() {
  var parametros = Object.create(null);
    parametros['q'] = encodeURIComponent($('.js-band-name').val());
    parametros['max-results'] = 8;
    parametros['v'] = 2;
    parametros['alt'] = 'jsonc';

  var ajxObj = $.ajax({
    url: 'helper/proxy.php',
    data: {url: 'http://gdata.youtube.com/feeds/api/videos?' + $.param(parametros)},
    dataType: 'json'
  })
  .done(function(result){
    for (var i in result.data.items) {
      var $vTitle = $('<h3></h3>').html(result.data.items[i].title);
      var $player = $('<a></a>').attr('href',result.data.items[i].player.default).addClass('oembed');
      $('<article></article>').addClass('js-article').addClass('js-article-'+i).append($vTitle).append($player).appendTo('.js-main-body');
    }
    var css = $('body').attr('data-css');
    showThumbnails();
    switch(css) {
      case 'pure':
        purefy();
        break;
      case 'foundation':
        foundation();
        break;
      case 'bootstrap':
        bootstrap();
        break;
      default:
    }
 })
}

function purefy() {
  var $article = $('.js-article');
  var artArrLen = $article.length;
  var artPerDiv = 4;
  for (var i = 0;i < artArrLen;i+=artPerDiv){
    $article.filter(':eq('+i+'),:lt('+(i+artPerDiv)+'):gt('+i+')').wrapAll('<div />');
  };
  $('.js-main-body > div').addClass('pure-g-r');
  $article.addClass('pure-u-1-4');
}

function foundation() {
  var $article = $('.js-article');
  var artArrLen = $article.length;
  var artPerDiv = 4;
  for (var i = 0;i < artArrLen;i+=artPerDiv){
    $article.filter(':eq('+i+'),:lt('+(i+artPerDiv)+'):gt('+i+')').wrapAll('<div />');
  };
  $('.js-main-body > div').addClass('row');
  $article.addClass('large-3 columns');
}

function bootstrap() {
  var $article = $('.js-article');
  var artArrLen = $article.length;
  var artPerDiv = 4;
  for (var i = 0;i < artArrLen;i+=artPerDiv){
    $article.filter(':eq('+i+'),:lt('+(i+artPerDiv)+'):gt('+i+')').wrapAll('<div />');
  };
  $('.js-main-body').addClass('container');
  $('.js-main-body > div').addClass('row');
  $article.addClass('col-md-3 col-sm-6');
}

function afterEmbedStuff() {
  if ( $('body').attr('data-css') == 'foundation') {
    $('.oembed-container').addClass('flex-video');
  }
}