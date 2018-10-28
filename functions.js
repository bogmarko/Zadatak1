var conf = require("./config.js");



// function random

module.exports.random = function() {

	if (typeof min !== "number" || typeof max !== "number") {
		return "Error NaN";
	} else {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
};
	



// function minIntegerFromArray

module.exports.minIntegerFromArray = function() {

	var	newArray = [];

		isInArray.forEach(function(item){
		if (typeof item == "number") {
			newArray.push(item);
 			// jshint ignore: start
			x = Math.min(...newArray);
			// jshint ignore: end
		} else {
			x = "False";			
		}
	});
			return x;
};





// function minIntegerFromString

module.exports.minIntegerFromString = function(){

	var x = someText.match(/\d+/g);
	 
	if (x === null) {
		return "False";
	} else {
		// jshint ignore: start
		return Math.min(...x);
		// jshint ignore: end
	}	
};





// function concatStringsByLength

module.exports.concatStringsByLength = function() {

	
	if (type == 0){

		arrayOfString.sort(function(a, b) {
			return	a.length - b.length;
	});
			return arrayOfString.join(""); 

   } else if (type == 1) {

   		arrayOfString.sort(function(a, b) {
			return	b.length - a.length;
	});
   			return arrayOfString.join("");
   } else {
   			return "Error";
   }

};


