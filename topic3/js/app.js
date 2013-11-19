$(function() {

  var mv = new Movie();
  mv.AddObserver(MovieObserver);
  mv.set('title', 'Terminator');
  mv.play();
  mv.stop();

});

var MovieObserver = {
  Update: function( context ){
    console.log(context);
  },
}