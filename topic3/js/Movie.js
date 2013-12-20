"use strict";

function Movie () {
    this.attributes = [];
}

Movie.prototype.play = function() {
  this.Notify('Playing ' + this.get('title'));
};

Movie.prototype.stop =  function() {
  this.Notify('Stoping ' + this.get('title'));
};

Movie.prototype.set = function (key, value) {
  this.attributes[key] = value;
};

Movie.prototype.get = function (key) {
  return this.attributes[key];
};


var MovieModule = (function () {

  var attributes = [];

  return {
    play: function() {
      this.Notify('Playing ' + this.get('title'));
    },

    stop:  function() {
      this.Notify('Stoping ' + this.get('title'));
    },

    set: function (key, value) {
      attributes[key] = value;
    },

    get: function (key) {
      return attributes[key];
    },

  };

})();

function DownloadableMovie () {

    this.download = function (){
      console.log('Downloading ... ');
    };
}

