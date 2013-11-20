$(function() {


  var mv = new Movie();
  extend(new Subject(), mv);

  mv.AddObserver(MovieObserver);
  mv.set('title', 'Terminator');
  mv.play();
  mv.stop();

  var mvd = new DownloadableMovie();
  extend(new Subject(), mvd);
  extend(new Movie(), mvd);

  mvd.AddObserver(MovieObserver);
  mvd.set('title', 'Terminator 3');
  mvd.download();
  mvd.play();
  mvd.stop();

  mixin(new Social(), Movie);

  mv.share('Sir Thomas');

  var actores = [];
  actores.push(new Actor('John','Wayne'));
  actores.push(new Actor('Marlon','Brandon'));
  actores.push(new Actor('Danny','De Vitto'));

  mv.set('actores', actores);

  console.log(mv.get('actores'));

});

var MovieObserver = {
  Update: function( context ){
    console.log(context);
  },
}


