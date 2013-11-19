function Movie () {
    this.attributes = [];
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


Movie.prototype.play = function() {
  this.Notify('Playing '+ this.get('title'))
};

Movie.prototype.stop =  function() {
  this.Notify('Stoping '+ this.get('title'))
};

Movie.prototype.set = function (key, value) {
  this.attributes[key] = value;
}

Movie.prototype.get = function (key) {
  return this.attributes[key];
}
