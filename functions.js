var conf = require("./config.js");



// function random

module.exports.random = function() {

	if (typeof min && typeof max !== "number") {

		return "Error NaN";

	} else {

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

/* 
	or 
		function getRndInteger(min, max) {
	
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/




// function minIntegerFromArray

module.exports.minIntegerFromArray = function() {

		newArray = [];

		isInArray.forEach(function(item){

		if (typeof item == "number") {

			newArray.push(item);
			x = Math.min(...newArray);

		} else {

			x = "False";			
		}
	});
			return x;
};





// function minIntegerFromString

module.exports.minIntegerFromString = function(){

	 x = someText.match(/\d+/g);

	if (x === null) {

		return "False";

	} else {

		return Math.min(...x);
	}
	
};





//function concatStringsByLength

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


