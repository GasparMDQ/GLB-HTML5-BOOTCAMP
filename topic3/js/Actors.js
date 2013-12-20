"use strict";

function Actor (name, lastname) {
	this.name = name;
    this.lastname = lastname;
    this.toString = function(){ return name+' '+lastname; };
}
