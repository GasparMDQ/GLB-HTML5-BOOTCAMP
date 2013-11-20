function Subject () {
  this.observers = new ObserverList();
  this.Notify = function ( context ){
    var observerCount = this.observers.Count();
    for(var i=0; i < observerCount; i++){
      this.observers.Get(i).Update( context );
    }
  };

  this.AddObserver = function( observer ){
    this.observers.Add( observer );
  };
}

