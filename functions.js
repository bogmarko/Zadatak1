var config = require("./config.js");



// Function random

module.exports.random = function() {
	if (typeof config.min !== "number" || typeof config.max !== "number") {
		return "Error NaN";
	} else {
		return Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
	}
};
	



// Function minIntegerFromArray

module.exports.minIntegerFromArray = function minIntegerFromArray() {
	var newArray = [];
	var x;
	config.isInArray.forEach(function(item){
		if (typeof item == "number") {
			newArray.push(item);
			x = Math.min(...newArray);	
		} else {
			x = "False";			
		}
	});
	return x;
};




// Function minIntegerFromString

module.exports.minIntegerFromString = function minIntegerFromString(){
	var x = config.someText.match(/\d+/g); 
	if (x === null) {
		return "False";
	} else {	
		return Math.min(...x);
	}	
};



// Function concatStringsByLength

module.exports.concatStringsByLength = function concatStringsByLength() {
	if (config.type == 0){
		config.arrayOfString.sort(function(a, b) {
			return	a.length - b.length;
		});
		return config.arrayOfString.join(""); 
	} else if (config.type == 1) {
		config.arrayOfString.sort(function(a, b) {
			return	b.length - a.length;
		});
		return config.arrayOfString.join("");
	} else {
		return "Error";
	}
};


