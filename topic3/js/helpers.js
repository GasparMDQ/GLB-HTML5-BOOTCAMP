"use strict";
// Extend an object with an extension
function extend( extension, obj ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}
 
function mixin( mixin, obj ){
	for (var key in mixin ){
		if(!obj.prototype.hasOwnProperty(key)){
			obj.prototype[key] = mixin[key];
		}
	}
}